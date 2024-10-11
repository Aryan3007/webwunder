export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      inquiries: {
        Row: {
          created_at: string
          email: string | null
          full_name: string | null
          id: number
          message: string | null
          phone: string | null
        }
        Insert: {
          created_at?: string
          email?: string | null
          full_name?: string | null
          id?: number
          message?: string | null
          phone?: string | null
        }
        Update: {
          created_at?: string
          email?: string | null
          full_name?: string | null
          id?: number
          message?: string | null
          phone?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string
          dob: string | null
          email: string | null
          first_name: string | null
          id: string
          last_name: string | null
          mobile: string | null
          aaddress? : string | null
        }
        Insert: {
          created_at?: string
          dob?: string | null
          email?: string | null
          first_name?: string | null
          id: string
          last_name?: string | null
          mobile?: string | null
          aaddress? : string | null
        }
        Update: {
          created_at?: string
          dob?: string | null
          email?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          mobile?: string | null
          aaddress? : string | null
        }
        Relationships: [
          {
            foreignKeyName: "profile_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      projects: {
        Row: {
          awork_link: string | null
          cancelled_date: string | null
          created_at: string
          customer_id: string | null
          deleted_date: string | null
          email: string
          end_date: string | null
          id: number
          invoice_id: string | null
          invoice_no: string | null
          notes: string | null
          package_type: Database["public"]["Enums"]["package_type"]
          payment_intent_id: string | null
          payment_status: Database["public"]["Enums"]["payment_status"]
          start_date: string | null
          subscription_id: string
          title: string | null
          user_id: string
          user_friendly_email?: string | null; // Add this here
          invoice_url? : string | null
          user_notes? : string[] | null;

        }
        Insert: {
          awork_link?: string | null
          cancelled_date?: string | null
          created_at?: string
          customer_id?: string | null
          deleted_date?: string | null
          email: string
          end_date?: string | null
          id?: number
          invoice_id?: string | null
          invoice_no?: string | null
          notes?: string | null
          package_type: Database["public"]["Enums"]["package_type"]
          payment_intent_id?: string | null
          payment_status: Database["public"]["Enums"]["payment_status"]
          start_date?: string | null
          subscription_id: string
          title?: string | null
          user_id: string
          userFriendlyEmail?: string | null; // Add this here
          user_notes? : string[] | null;

        }
        Update: {
          awork_link?: string | null
          cancelled_date?: string | null
          created_at?: string
          customer_id?: string | null
          deleted_date?: string | null
          email?: string
          end_date?: string | null
          id?: number
          invoice_id?: string | null
          invoice_no?: string | null
          notes?: string | null
          package_type?: Database["public"]["Enums"]["package_type"]
          payment_intent_id?: string | null
          payment_status?: Database["public"]["Enums"]["payment_status"]
          start_date?: string | null
          subscription_id?: string
          title?: string | null
          user_id?: string
          userFriendlyEmail?: string | null; // Add this here
          user_notes? : string[] | null;

        }
        Relationships: []
      }
      roles: {
        Row: {
          created_at: string
          id: number
          role: Database["public"]["Enums"]["role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: number
          role: Database["public"]["Enums"]["role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: number
          role?: Database["public"]["Enums"]["role"]
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "roles_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "roles_user_id_fkey1"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      },
      messages: {
        Row: {
          id: number;
          customer_id: string;
          message_body: string;
          is_read : boolean;
          admin_id: string;
        
          // Add other fields present in the messages table
        };
        insert: {
          id: number;
          customer_id: string;
          message_body: string;
          is_read : boolean;
          admin_id: string;
          // Add other fields required for insertion
        };
        Update: {
          id: number;
          customer_id: string;
          message_body: string;
          is_read : boolean;
          admin_id: string;
          // Add other fields that can be updated
        };
      };
      files : {
        Row: {
          id: number;
          user_id: string; // UUID for the user (customer)
          file_name: string; // Name of the file
          file_url: string; // URL where the file is stored
          uploaded_at: string; // Timestamp for when the file was uploaded
        };
        Insert: {
          user_id: string; // Required for inserting a new file
          file_name: string; // Required name of the file
          file_url: string; // Required URL of the file
          uploaded_at?: string; // Optional, defaults to the current timestamp if not provided
        };
        Update: {
          id: number; // Required to identify which file to update
          file_name?: string; // Optional, can update the name of the file
          file_url?: string; // Optional, can update the file's URL
          uploaded_at?: string; // Optional, can update the timestamp for when the file was uploaded
        };
      };
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      change_password: {
        Args: {
          current_plain_password: string
          new_plain_password: string
          current_id: string
        }
        Returns: string
      }
    }
    Enums: {
      package_type:
        | "website-standard"
        | "website-pro"
        | "service-standard"
        | "service-pro"
        | "unlimited-standard"
        | "unlimited-pro"
      payment_status: "pending" | "success" | "failed" | "expired"
      role: "admin"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
