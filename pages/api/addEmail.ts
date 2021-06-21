// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Joi from "joi";
import { NextApiRequest, NextApiResponse } from "next";
import supabase from "../../common/supabase";
import cors from "cors";

let corsVar = cors({ origin: true });

export default async (req: NextApiRequest, res: NextApiResponse) => {
  corsVar(req, res, async () => {
    try {
      const schema = Joi.object({
        email: Joi.string().email().required(),
      });
      const { value, error } = schema.validate(req.body);
      if (error) {
        throw {
          status: 422,
          message: "Email Not Valid",
        };
      } else {
        const { data, error } = await supabase
          .from("emails")
          .select()
          .eq("email", value.email);
        if (error) {
          throw {
            status: 500,
            message: "Database Error",
          };
        } else {
          if (data.length !== 0) {
            throw {
              status: 409,
              message: "Email already registered",
            };
          } else {
            const { data, error } = await supabase
              .from("emails")
              .insert([{ email: value.email }]);
            if (error) {
              throw {
                status: 500,
                message: "Database Error",
              };
            }
            res.status(201).json({
              message: "Email Added",
            });
          }
        }
      }
    } catch (e) {
      res.status(e.status || 500).json({
        message: e.message || "An unexpected error occurred",
      });
    }
  });
};
