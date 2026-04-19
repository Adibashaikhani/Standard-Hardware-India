
export const GOOGLE_SHEETS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyfKeaEV2wxzyRJt_VzoucyIGVpg8Y9hAQTjzLT95vSr9usOZjueTTw1cQdTk3uWera/exec";

export interface FormData {
  type: 'quote' | 'contact';
  name: string;
  email: string;
  phone?: string;
  company?: string;
  product?: string;
  requirement?: string;
  message?: string;
}

export async function sendEmail(data: FormData) {
  // Replace these with your EmailJS credentials
  const SERVICE_ID = "service_2e39e25";
  const TEMPLATE_ID = "template_l68ry4b";
  const PUBLIC_KEY = "8KEH4euYVo7ASvmmI";
  try {
    await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: SERVICE_ID,
        template_id: TEMPLATE_ID,
        user_id: PUBLIC_KEY,
        template_params: {
          title: `${data.type.toUpperCase()} Inquiry`,
          name: data.name,
          email: data.email,
          phone: data.phone || "N/A",
          company: data.company || "N/A",
          message: data.requirement || data.message || "No specific requirement provided",
          // Keeping extra fields in case you want to add them to your template later
          product: data.product || "General Inquiry",
          subject: `${data.type.toUpperCase()} - ${data.name}`,
        },
      }),
    });
  } catch (error) {
    console.error("Error sending email notification:", error);
  }
}

export async function submitToGoogleSheets(data: FormData) {
  if (!GOOGLE_SHEETS_SCRIPT_URL || GOOGLE_SHEETS_SCRIPT_URL.includes("YOUR_GOOGLE_SCRIPT_URL_HERE")) {
    console.warn("Google Sheets Script URL not set. Data not sent:", data);
    return { success: false, message: "Google Sheets Script URL not configured." };
  }

  try {
    // Send to Google Sheets
    const sheetPromise = fetch(GOOGLE_SHEETS_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    // Also send email notification
    const emailPromise = sendEmail(data);

    await Promise.allSettled([sheetPromise, emailPromise]);

    return { success: true };
  } catch (error) {
    console.error("Error submitting inquiry:", error);
    return { success: false, error };
  }
}
