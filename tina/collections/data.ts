import type { Collection } from "tinacms";

export const dataScheme: Collection = {
  name: "data",
  label: "Configuración del sitio",
  path: "src/content/config",
  format: "json",
  ui: {
    global: true,
  },
  fields: [
    {
      type: "object",
      name: "seo",
      label: "Información del sitio",
      description: "Información del sitio web para SEO",
      ui: {
        itemProps: (item) => {
          return {
            label: item?.title,
          };
        },
      },
      fields: [
        {
          type: "string",
          name: "title",
          label: "Título",
          description: "Título del sitio web",
        },
        {
          type: "string",
          name: "description",
          label: "Descripción",
          description: "Descripción del sitio web",
        },
        {
          type: "string",
          name: "keywords",
          label: "Palabras clave",
          description: "Palabras clave del sitio web (separadas por comas)",
        },
        {
          type: "image",
          name: "image",
          label: "Logo",
          description: "Logo del sitio web",
        },
      ],
    },
    {
      type: "object",
      name: "social",
      label: "Redes Sociales",
      description: "Enlaces a las redes sociales del sitio web",
      list: true,
      ui: {
        itemProps: (item) => {
          return {
            label: item?.label,
          };
        },
      },
      fields: [
        {
          type: "string",
          name: "label",
          label: "Red Social",
          description: "Nombre de la red social",
        },
        {
          type: "string",
          name: "url",
          label: "Enlace",
          description: "Enlace a la red social",
        },
        {
          type: "string",
          name: "icon",
          label: "Icono",
          description:
            "Nombre del icono de la red social (de FontAwesome free: <a class='text-blue-500' target='_blank' href='https://fontawesome.com/search?ic=free'>https://fontawesome.com/search?ic=free</a> ejemplo: 'fab fa-facebook')",
        },
      ],
    },
    {
      type: "object",
      name: "contact",
      label: "Contacto",
      description: "Información de contacto del sitio web",
      ui: {
        itemProps: (item) => {
          return {
            label: item?.value,
          };
        },
      },
      fields: [
        {
          type: "string",
          name: "email",
          label: "Email",
          description: "Email de contacto",
        },
        {
          type: "string",
          name: "phone",
          label: "Teléfono",
          description: "Teléfono de contacto",
        },
      ],
    },
    {
      type: "object",
      name: "services",
      label: "Servicios",
      description: "Información de los servicios ofrecidos por el sitio web",
      list: true,
      ui: {
        itemProps: (item) => {
          return {
            label: item?.title,
          };
        },
      },
      fields: [
        {
          type: "string",
          name: "title",
          label: "Título",
          description: "Título del área de servicio",
          required: true,
        },
        {
          type: "string",
          name: "icon",
          label: "Icono",
          description:
            "Nombre del icono del área de servicio (de FontAwesome free: <a class='text-blue-500' target='_blank' href='https://fontawesome.com/search?ic=free'>https://fontawesome.com/search?ic=free</a> ejemplo: 'fas fa-gavel')",
          required: true,
        },
        {
          type: "string",
          name: "description",
          label: "Descripción",
          description: "Descripción breve del área de servicio",
        },
        {
          type: "image",
          name: "background",
          label: "Fondo",
          description: "Imagen de fondo del área de servicio",
        },
        {
          type: "object",
          name: "items",
          label: "Servicio",
          description: "Detalles del servicio",
          list: true,
          required: true,
          ui: {
            itemProps: (item) => {
              return {
                label: item?.name,
              };
            },
          },
          fields: [
            {
              type: "string",
              name: "name",
              label: "Nombre del servicio",
            },
          ],
        },
      ],
    },
  ],
};
