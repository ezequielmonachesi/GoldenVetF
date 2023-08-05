import imagenPrimerosPasos1 from "../../../assets/plan-primeros-pasos-1.jpg";
import imagenPrimerosPasos2 from "../../../assets/plan-primeros-pasos-2.jpg";
import imagenPrimerosPasos3 from "../../../assets/plan-primeros-pasos-3.jpg";
import imagenPrimerosPasos4 from "../../../assets/plan-primeros-pasos-4.jpg";
import imagenMadurando1 from "../../../assets/plan-madurando-1.jpg";
import imagenMadurando2 from "../../../assets/plan-madurando-2.jpg";
import imagenMadurando3 from "../../../assets/plan-madurando-3.jpg";
import imagenMadurando4 from "../../../assets/plan-madurando-4.jpg";
import imagenAdulto1 from "../../../assets/plan-adultos-1.jpg";
import imagenAdulto2 from "../../../assets/plan-adultos-2.jpg";
import imagenAdulto3 from "../../../assets/plan-adultos-3.jpg";
import imagenAdulto4 from "../../../assets/plan-adultos-4.jpg";

export const planData = [
    {
        id: "plan-primeros-pasos",
        nombrePlan: "Primeros pasos",
        rangoEdad: "0-5 años",
        descripcion: "Este plan está diseñado para atender a las mascotas en sus etapas más jóvenes, desde el nacimiento hasta los 5 años de edad. Sabemos lo importante que es brindarles un cuidado óptimo durante su desarrollo temprano para asegurar una vida saludable y feliz",
        serviciosPlan: [
            "Vacunación y desparasitación: Mantenemos al día las vacunas y tratamientos contra parásitos para proteger a tu mascota contra enfermedades comunes.",
            "Consultas veterinarias regulares: Realizamos exámenes médicos completos para monitorear su crecimiento y desarrollo, identificando cualquier problema potencial de manera temprana.",
            "Asesoramiento nutricional: Te proporcionamos una dieta balanceada y adecuada para cubrir las necesidades nutricionales específicas de tu mascota en esta etapa crucial.",
            "Microchip y registro de identificación: Implementamos medidas de seguridad para ayudar a encontrar a tu mascota en caso de extravío.",
            "Educación y entrenamiento básico: Ofrecemos orientación para el adiestramiento inicial, fortaleciendo los lazos entre tú y tu compañero peludo."
        ],
        imagenes: [
            imagenPrimerosPasos1,
            imagenPrimerosPasos2,
            imagenPrimerosPasos3,
            imagenPrimerosPasos4
        ]
    },
    {
        id: "plan-madurando",
        nombrePlan: "Madurando",
        rangoEdad: "5-10 años",
        descripcion: 'Nuestro plan "Madurando" se enfoca en las mascotas que tienen entre 5 y 10 años de edad. Comprendemos que esta etapa puede requerir un cuidado especial para mantener la vitalidad y el bienestar de tu compañero en plena madurez.',
        serviciosPlan: [
            "Chequeos de salud periódicos: Realizamos exámenes médicos completos para detectar y tratar cualquier problema de salud relacionado con el envejecimiento.",
            "Evaluación de movilidad y cuidado articular: Nos preocupamos por la comodidad de tu mascota y ofrecemos terapias y tratamientos para aliviar molestias articulares propias de esta etapa.",
            "Control de peso: Mantener un peso saludable es esencial para prevenir problemas de salud asociados con el sobrepeso u obesidad.",
            "Análisis de sangre y orina: Realizamos análisis regulares para monitorear la salud interna de tu mascota y detectar cualquier anomalía en etapas tempranas.",
            "Atención personalizada: Adaptamos nuestros servicios a las necesidades específicas de tu mascota, asegurando una atención integral y afectuosa."
        ],
        imagenes: [
            imagenMadurando1,
            imagenMadurando2,
            imagenMadurando3,
            imagenMadurando4
        ]
    },
    {
        id: "plan-adultos",
        nombrePlan: "Adultos",
        rangoEdad: "10+ años",
        descripcion: 'Nuestro plan "Adultos" se enfoca en las mascotas que han superado los 10 años de edad. En esta etapa, el cuidado y la atención adecuada son esenciales para garantizar una calidad de vida óptima.',
        serviciosPlan: [
            "Exámenes médicos completos: Realizamos evaluaciones periódicas para monitorear la salud general y brindar tratamientos preventivos y paliativos según sea necesario.",
            "Geriatría veterinaria: Abordamos los desafíos específicos asociados con el envejecimiento, como la artritis, pérdida de audición y problemas dentales.",
            "Manejo del dolor y la incomodidad: Proporcionamos terapias para aliviar el dolor y mejorar la calidad de vida de tu mascota en esta etapa.",
            "Modificaciones en la dieta: Adaptamos la alimentación para satisfacer las necesidades cambiantes de tu mascota y abordar posibles problemas de salud.",
            "Monitoreo constante: Estamos atentos a cualquier signo de malestar o cambio en la salud de tu mascota, brindándole el apoyo que merece en esta etapa de su vida."
        ],
        imagenes: [
            imagenAdulto1,
            imagenAdulto2,
            imagenAdulto3,
            imagenAdulto4
        ]
    }
]