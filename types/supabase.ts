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
      books: {
        Row: {
          author: string | null
          description: string | null
          id: number
          title: string | null
        }
        Insert: {
          author?: string | null
          description?: string | null
          id?: number
          title?: string | null
        }
        Update: {
          author?: string | null
          description?: string | null
          id?: number
          title?: string | null
        }
        Relationships: []
      }
      items: {
        Row: {
          embedding: string | null
          id: number
          title: string | null
        }
        Insert: {
          embedding?: string | null
          id?: never
          title?: string | null
        }
        Update: {
          embedding?: string | null
          id?: never
          title?: string | null
        }
        Relationships: []
      }
      let_tn_qa_info: {
        Row: {
          answer_cn: string | null
          answer_de: string | null
          answer_editr_use_yn: string | null
          answer_file_id: string | null
          answer_reg_dtm: string | null
          answer_reg_id: string | null
          answer_upd_dtm: string | null
          answer_upd_id: string | null
          area_no: string | null
          atch_file_id: string | null
          delete_dtm: string | null
          delete_yn: string
          deleter_id: string | null
          deleter_ty: string | null
          email_adres: string | null
          email_answer_at: string
          end_telno: string | null
          env_info: string | null
          frst_register_id: string | null
          frst_register_pnttm: string | null
          inqire_co: number
          last_updusr_id: string | null
          last_updusr_pnttm: string | null
          middle_telno: string | null
          nationality: string | null
          open_artifact_id: number | null
          open_artifact_message_id: number | null
          qa_id: string
          qa_lang_cd: string
          qestn_cn: string | null
          qestn_sj: string
          qestn_st: string | null
          qestn_st_dt: string | null
          qna_process_sttus_code: string
          writng_de: string
          writng_password: string | null
          wrter_nm: string | null
        }
        Insert: {
          answer_cn?: string | null
          answer_de?: string | null
          answer_editr_use_yn?: string | null
          answer_file_id?: string | null
          answer_reg_dtm?: string | null
          answer_reg_id?: string | null
          answer_upd_dtm?: string | null
          answer_upd_id?: string | null
          area_no?: string | null
          atch_file_id?: string | null
          delete_dtm?: string | null
          delete_yn: string
          deleter_id?: string | null
          deleter_ty?: string | null
          email_adres?: string | null
          email_answer_at: string
          end_telno?: string | null
          env_info?: string | null
          frst_register_id?: string | null
          frst_register_pnttm?: string | null
          inqire_co: number
          last_updusr_id?: string | null
          last_updusr_pnttm?: string | null
          middle_telno?: string | null
          nationality?: string | null
          open_artifact_id?: number | null
          open_artifact_message_id?: number | null
          qa_id: string
          qa_lang_cd: string
          qestn_cn?: string | null
          qestn_sj: string
          qestn_st?: string | null
          qestn_st_dt?: string | null
          qna_process_sttus_code: string
          writng_de: string
          writng_password?: string | null
          wrter_nm?: string | null
        }
        Update: {
          answer_cn?: string | null
          answer_de?: string | null
          answer_editr_use_yn?: string | null
          answer_file_id?: string | null
          answer_reg_dtm?: string | null
          answer_reg_id?: string | null
          answer_upd_dtm?: string | null
          answer_upd_id?: string | null
          area_no?: string | null
          atch_file_id?: string | null
          delete_dtm?: string | null
          delete_yn?: string
          deleter_id?: string | null
          deleter_ty?: string | null
          email_adres?: string | null
          email_answer_at?: string
          end_telno?: string | null
          env_info?: string | null
          frst_register_id?: string | null
          frst_register_pnttm?: string | null
          inqire_co?: number
          last_updusr_id?: string | null
          last_updusr_pnttm?: string | null
          middle_telno?: string | null
          nationality?: string | null
          open_artifact_id?: number | null
          open_artifact_message_id?: number | null
          qa_id?: string
          qa_lang_cd?: string
          qestn_cn?: string | null
          qestn_sj?: string
          qestn_st?: string | null
          qestn_st_dt?: string | null
          qna_process_sttus_code?: string
          writng_de?: string
          writng_password?: string | null
          wrter_nm?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          full_name: string | null
          id: string
          updated_at: string | null
          username: string | null
          website: string | null
        }
        Insert: {
          avatar_url?: string | null
          full_name?: string | null
          id: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Update: {
          avatar_url?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      todos_no_rls: {
        Row: {
          content: string | null
          created_at: string
          deleted_at: string | null
          id: number
          updated_at: string | null
        }
        Insert: {
          content?: string | null
          created_at?: string
          deleted_at?: string | null
          id?: number
          updated_at?: string | null
        }
        Update: {
          content?: string | null
          created_at?: string
          deleted_at?: string | null
          id?: number
          updated_at?: string | null
        }
        Relationships: []
      }
      todos_with_rls: {
        Row: {
          content: string | null
          created_at: string
          deleted_at: string | null
          id: number
          updated_at: string
          user_id: string
        }
        Insert: {
          content?: string | null
          created_at?: string
          deleted_at?: string | null
          id?: number
          updated_at?: string
          user_id?: string
        }
        Update: {
          content?: string | null
          created_at?: string
          deleted_at?: string | null
          id?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "todos_with_rls_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      vector_store: {
        Row: {
          content: string | null
          embedding: string | null
          id: string
          metadata: Json | null
        }
        Insert: {
          content?: string | null
          embedding?: string | null
          id?: string
          metadata?: Json | null
        }
        Update: {
          content?: string | null
          embedding?: string | null
          id?: string
          metadata?: Json | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      akeys: {
        Args: {
          "": unknown
        }
        Returns: string[]
      }
      avals: {
        Args: {
          "": unknown
        }
        Returns: string[]
      }
      binary_quantize:
        | {
            Args: {
              "": string
            }
            Returns: unknown
          }
        | {
            Args: {
              "": unknown
            }
            Returns: unknown
          }
      cube:
        | {
            Args: {
              "": number[]
            }
            Returns: unknown
          }
        | {
            Args: {
              "": number
            }
            Returns: unknown
          }
      cube_dim: {
        Args: {
          "": unknown
        }
        Returns: number
      }
      cube_in: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      cube_is_point: {
        Args: {
          "": unknown
        }
        Returns: boolean
      }
      cube_out: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      cube_recv: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      cube_send: {
        Args: {
          "": unknown
        }
        Returns: string
      }
      cube_size: {
        Args: {
          "": unknown
        }
        Returns: number
      }
      each: {
        Args: {
          hs: unknown
        }
        Returns: Record<string, unknown>[]
      }
      ghstore_compress: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      ghstore_decompress: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      ghstore_in: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      ghstore_options: {
        Args: {
          "": unknown
        }
        Returns: undefined
      }
      ghstore_out: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      halfvec_avg: {
        Args: {
          "": number[]
        }
        Returns: unknown
      }
      halfvec_out: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      halfvec_send: {
        Args: {
          "": unknown
        }
        Returns: string
      }
      halfvec_typmod_in: {
        Args: {
          "": unknown[]
        }
        Returns: number
      }
      hnsw_bit_support: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      hnsw_halfvec_support: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      hnsw_sparsevec_support: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      hnswhandler: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      hstore:
        | {
            Args: {
              "": string[]
            }
            Returns: unknown
          }
        | {
            Args: {
              "": Record<string, unknown>
            }
            Returns: unknown
          }
      hstore_hash: {
        Args: {
          "": unknown
        }
        Returns: number
      }
      hstore_in: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      hstore_out: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      hstore_recv: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      hstore_send: {
        Args: {
          "": unknown
        }
        Returns: string
      }
      hstore_subscript_handler: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      hstore_to_array: {
        Args: {
          "": unknown
        }
        Returns: string[]
      }
      hstore_to_json: {
        Args: {
          "": unknown
        }
        Returns: Json
      }
      hstore_to_json_loose: {
        Args: {
          "": unknown
        }
        Returns: Json
      }
      hstore_to_jsonb: {
        Args: {
          "": unknown
        }
        Returns: Json
      }
      hstore_to_jsonb_loose: {
        Args: {
          "": unknown
        }
        Returns: Json
      }
      hstore_to_matrix: {
        Args: {
          "": unknown
        }
        Returns: string[]
      }
      hstore_version_diag: {
        Args: {
          "": unknown
        }
        Returns: number
      }
      ivfflat_bit_support: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      ivfflat_halfvec_support: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      ivfflathandler: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      l2_norm:
        | {
            Args: {
              "": unknown
            }
            Returns: number
          }
        | {
            Args: {
              "": unknown
            }
            Returns: number
          }
      l2_normalize:
        | {
            Args: {
              "": string
            }
            Returns: string
          }
        | {
            Args: {
              "": unknown
            }
            Returns: unknown
          }
        | {
            Args: {
              "": unknown
            }
            Returns: unknown
          }
      skeys: {
        Args: {
          "": unknown
        }
        Returns: string[]
      }
      sparsevec_out: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      sparsevec_send: {
        Args: {
          "": unknown
        }
        Returns: string
      }
      sparsevec_typmod_in: {
        Args: {
          "": unknown[]
        }
        Returns: number
      }
      svals: {
        Args: {
          "": unknown
        }
        Returns: string[]
      }
      vector_avg: {
        Args: {
          "": number[]
        }
        Returns: string
      }
      vector_dims:
        | {
            Args: {
              "": string
            }
            Returns: number
          }
        | {
            Args: {
              "": unknown
            }
            Returns: number
          }
      vector_norm: {
        Args: {
          "": string
        }
        Returns: number
      }
      vector_out: {
        Args: {
          "": string
        }
        Returns: unknown
      }
      vector_send: {
        Args: {
          "": string
        }
        Returns: string
      }
      vector_typmod_in: {
        Args: {
          "": unknown[]
        }
        Returns: number
      }
    }
    Enums: {
      [_ in never]: never
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
