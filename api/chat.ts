import type { VercelRequest, VercelResponse } from "@vercel/node";
import { GoogleGenAI } from "@google/genai";

let ai: GoogleGenAI | null = null;

const getGeminiClient = () => {
  if (!ai) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey || apiKey === "MY_GEMINI_API_KEY" || apiKey === "") {
      console.warn("GEMINI_API_KEY is missing. AI assistant will run in demo/fallback mode.");
      return null;
    }
    ai = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return ai;
};

function getFallbackResponse(userMsg: string): string {
  const text = userMsg.toLowerCase();
  
  if (text.includes("price") || text.includes("cost") || text.includes("remodel") || text.includes("presupuesto") || text.includes("cuanto") || text.includes("estimar") || text.includes("estimate")) {
    return `Hola! I would love to help you plan your remodeling in Cabo! For precise pricing, we highly recommend trying our **Interactive Project Cost Estimator** below, which calculates customized totals instantly based on American building codes and local Cabo material/labor rates.

Generally, for home improvements:
- **Major Kitchen Remodels**: Normally range from $12,000 to $35,000 USD including luxury stone counters, solid wood custom cabinets, and professional plumbing routing.
- **Bathroom Renovations & Custom Tile**: Around $4,000 to $10,000 USD depending on premium porcelain/travertine tile layouts.
- **Professional Interior/Exterior Painting**: Formulated with anti-salt binders to resist ocean breeze, starting at $2.20 USD per sq. ft.

Would you like to detail a specific project, or shall I have Owner/Project Manager Tom Rondel reach out to you directly? You can connect immediately on WhatsApp at **+52 624 161 6968**!`;
  }

  if (text.includes("tile") || text.includes("piso") || text.includes("mosaico") || text.includes("azulejo") || text.includes("travertin")) {
    return `Tile work is one of our master specialties at Baja Pro! Under Cabo's high thermal shifts and marine climate, choosing the right material and grout is crucial:
*   **Porcelain Tile**: Exceptional durability, water resistance, and low thermal retention. Perfect for indoor-outdoor flows and pool decks.
*   **Travertine & Natural Stone**: Elegantly rustic and stays comfortable under direct Baja sun, but requires professional sealing to prevent saltwater erosion.
*   **Talavera Accents**: Beautiful for backsplashes and bathroom highlight inserts to capture that authentic Mexican colonial accent.

Our tile work is done to American Standards—featuring proper self-leveling mortar beds, laser-aligned joint grids, and anti-fungal waterproofing membranes behind wet walls. 

Would you like an estimate for a shower, living room, or outdoor deck floor?`;
  }

  if (text.includes("hola") || text.includes("hello") || text.includes("hi") || text.includes("buenas")) {
    return `Hello! How can I help you today? I can suggest suitable design layouts, explain our weatherproofing techniques for Cabo's salt/humidity, or help you structure an estimate.

We build strictly to **American Standards** (precision plumbing, secure grounding, state-of-the-art waterproofing behind custom tiles) at very competitive **Baja Prices**.

Are you interested in kitchen remodeling, bathroom tile design, weathered deck painting, or standard repairs or storm protection?`;
  }

  return `Welcome to **Baja Pro Home Improvement**! I'm Tom's Assistant, helping you plan renovations, tiling, painting, and custom home building here in Cabo San Lucas, BCS.

We pride ourselves on delivering **American Standards** (laser-set layouts, thick moisture vapor barriers, secure earthquake-resistant cabinetry anchoring) at local **Baja Prices**.

Our master services:
1. **Premium Remodeling** (Kitchens, baths, total condo makeovers)
2. **Master Tile Work** (Travertine, high-gloss porcelain, intricate patterns)
3. **Seaside Protection Painting** (Salt-resistant, protective acrylic coats)
4. **General Repairs & Hurricane prep** (Shutters, waterproofing)

What kind of renovation or repair are you considering today? You are also welcome to click our contact icons to talk with our owner, **Oded (Tom) Rondel**, on WhatsApp (+52 624 161 6968).`;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ success: false, error: "Method Not Allowed" });
  }

  try {
    const { messages } = req.body;
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ success: false, error: "Invalid messages array" });
    }

    const client = getGeminiClient();
    if (!client) {
      // Fallback response when key is not configured yet
      const lastUserMsg = messages[messages.length - 1]?.content || "";
      const fallbackText = getFallbackResponse(lastUserMsg);
      return res.status(200).json({ text: fallbackText, isDemo: true });
    }

    const systemInstruction = `You are Tom's intelligent AI Assistant representing "Baja Pro Home Improvement", a premium general contractor and home remodeling business located at Salomon de la Cruz Perez, El Tezal, C.P 23467, Cabo San Lucas, Baja California Sur, Mexico.
Owner / Project Manager: Oded (Tom) Rondel.
Contact Phone (WhatsApp): +52 624 161 6968 (with active calling and WhatsApp routing).
Email: ${process.env.QUOTE_RECEIVER_EMAIL || "the company email address"}.
Core motto: "American Standards. Baja Prices. Licensed & Insured."

About Baja Pro:
- We offer high-end residential & commercial remodeling, custom tile installation, professional painting, and general home repairs/maintenance for vacation condos, luxury villas, and local residences in Cabo.
- We bridge "American Standards" (precision, safety, modern plumbing & electrical code, moisture management, storm wind requirements, responsive billing and project reports in English/Spanish) with "Baja Prices" (the affordability, speed, and local network value of operating directly in Cabo).
- We are specialized in the Cabo climate, meaning we understand humidity control, concrete hydration, thermal insulating render, anti-salt paint binders, hurricane prep shutter tracks, and saltwater corrosion mitigation for oceanfront properties (e.g. Pedregal, Corridor, San Jose del Cabo).

Your Instructions:
- Adopt a helpful, warm, responsive, and highly professional contractor-consultant tone.
- Communicate natively in English or Spanish, based automatically on the user's language choice.
- Highlight specific pricing tips, materials suitable for Cabo (like Travertine, Marble, weatherproofing paint), and structural guidelines.
- Focus on practical, reassuring answers. Keep styling advice aligned with modern tropical, rustically refined, or beach-contemporary aesthetics.
- If they ask for detailed quotes, invite them to use the interactive Cost Estimator on our web page, or let them know they can click the contact buttons to reach Tom directly on WhatsApp (+52 624 161 6968).
- Keep formatting concise and highly readable, using bullet points or simple tables.`;

    // Map communication history to Gemini structure
    const contents = messages.map((msg: any) => ({
      role: msg.role === "assistant" ? "model" : "user",
      parts: [{ text: msg.content }],
    }));

    const result = await client.models.generateContent({
      model: "gemini-3.5-flash",
      contents: contents,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      },
    });

    return res.status(200).json({ text: result.text || "I apologize, I didn't catch that. Could you please rephrase?" });
  } catch (error: any) {
    console.error("Gemini API Error in Serverless handler:", error);
    return res.status(500).json({ success: false, error: error.message || "Server Error calling Gemini AI" });
  }
}
