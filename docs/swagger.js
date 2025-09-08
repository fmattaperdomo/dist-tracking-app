const fs = require("fs");
const swaggerJsdoc = require("swagger-jsdoc");

/**
 * API Config Info
 */

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Tracking API",
    version: "1.0.1",
  },
  servers: [
    {
      url: "http://localhost:3000/api/v1",
    },
    {
      url: "https://frozen-bayou-19544-26a909144d90.herokuapp.com/api/v1",
    },
  ],
  components: {
    securitySchemes:{
        bearerAuth:{
            type:"http",
            scheme:"bearer"
        }
    },
    schemas: {
      authLogin: {
        type: "object",
        required: ["email", "password"],
        properties: {
          email: {
            type: "string",
          },
          password: {
            type: "string",
          },
        }, 
      },
      authRegister: {
        type: "object",
        required: ["email", "password", "role", "password", "createdAt"],
        properties: {
          name: {
            type: "string",
          },
          email: {
            type: "string",
          },
          role: {
            type: "string[]",
          },
          password: {
            type: "string",
          },
          createdAt: {
            type: "Date",
          },
        },
      },
      shipment: {
        type: "object",
        required: ["description", "sender_contact", "receiver_contact", "createdAt", "user"],
        properties: {
          description: {
            type: "string",
          },
          sender_contact: {
            type: "string",
          },
          receiver_contact: {
            type: "string",
          },
          createdAt: {
            type: "date",
          },
          user: {
            type: "string",
          },
        },
      },
      unit: {
        type: "object",
        required: ["description", "weight", "dimensions", "currentStatus", "createdAt", "user", "shipment"],
        properties: {
          description: {
            type: "string",
          },
          weight: {
            type: "string",
          },
          dimensions: {
            type: "string",
          },
          currentStatus: {
            type: "string",
          },
          createdAt: {
            type: "Date",
          },
          user: {
            type: "string",
          },
          shipment: {
            type: "string",
          },
        },
      },
      checkpoint: {
        type: "object",
        required: ["status", "comment", "location", "createdAt", "user", "unit"],
        properties: {
          status: {
            type: "string",
          },
          comment: {
            type: "string",
          },
          location: {
            type: "string",
          },
          createdAt: {
            type: "string",
          },
          user: {
            type: "String",
          },
          unit: {
            type: "string",
          },
        },
      },
    },
  },
};

const options = {
  swaggerDefinition,
  
  apis: [`${__dirname}/presentation/routes.js`, `${__dirname}/presentation/auth/routes.js`, `${__dirname}/presentation/shipment/routes.js`, `${__dirname}/presentation/unit/routes.js`, `${__dirname}/presentation/checkpoint/routes.js`],
};

const openApiConfiguration = swaggerJsdoc(options);

module.exports = openApiConfiguration;
