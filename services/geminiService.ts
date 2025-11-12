import { GoogleGenAI } from "@google/genai";

export async function generateMotivation(goal: string): Promise<string> {
  // Assume API_KEY is set in the environment
  if (!process.env.API_KEY) {
    console.error("API_KEY is not set.");
    return "Lỗi: API Key chưa được cấu hình. Vui lòng kiểm tra lại.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const prompt = `Hãy viết một đoạn văn ngắn gọn (khoảng 2-3 câu), truyền cảm hứng cho một người có mục tiêu "${goal}". Nhấn mạnh tầm quan trọng của việc học các kiến thức nền tảng, chinh phục một chứng chỉ cloud uy tín (như AWS Solutions Architect), thành thạo các công cụ DevOps như Terraform và Kubernetes, và xây dựng dự án thực tế. Giữ giọng văn tích cực và khuyến khích. Viết bằng tiếng Việt.`;
    
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
    });

    return response.text;
  } catch (error) {
    console.error("Error generating content with Gemini:", error);
    return "Hành trình vạn dặm bắt đầu từ một bước chân. Hãy bắt đầu ngay hôm nay, và bạn sẽ đạt được mục tiêu của mình!";
  }
}
