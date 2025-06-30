import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { fromError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const result = insertContactMessageSchema.safeParse(req.body);
      
      if (!result.success) {
        const validationError = fromError(result.error);
        return res.status(400).json({ message: validationError.toString() });
      }

      const contactMessage = await storage.createContactMessage(result.data);
      
      // In a real application, you would send an email notification here
      console.log("New contact message received:", contactMessage);
      
      res.json({ 
        message: "Thank you for your message! I'll get back to you soon.",
        success: true 
      });
    } catch (error) {
      console.error("Error creating contact message:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Get contact messages endpoint (for admin use if needed)
  app.get("/api/contact", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.json(messages);
    } catch (error) {
      console.error("Error fetching contact messages:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
