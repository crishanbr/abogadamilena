import type { Collection } from "tinacms";

export const blogCollection: Collection = {
  name: "blog",
  label: "Blog posts",
  path: "src/content/blog",
  format: "md",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Título",
      isTitle: true,
      required: true,
    },
    {
      type: "string",
      name: "description",
      label: "Descripción / Extracto",
      isTitle: false,
      required: true,
    },
    {
      type: "datetime",
      name: "pubDate",
      label: "Fecha de publicación",
      required: true,
    },
    {
      type: "datetime",
      name: "updatedDate",
      label: "Fecha de actualización",
    },
    {
      type: "image",
      name: "image",
      label: "Imagen de portada",
    },
    {
      type: "string",
      name: "category",
      label: "Categoría",
    },
    {
      type: "string",
      name: "tags",
      label: "Etiquetas",
      list: true,
    },
    {
      type: "rich-text",
      name: "body",
      label: "Cuerpo",
      isBody: true,
      required: true,
    },
  ]
}