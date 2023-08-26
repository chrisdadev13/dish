import { Button, buttonVariants } from "~/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "~/components/ui/badge";
import { Github } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

import dynamic from "next/dynamic";

const NoSSR = dynamic(() => import("./components/features"), { ssr: false });

export default async function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <div className="px-52 pt-52">
        <div className="flex w-full flex-1 items-center justify-center">
          <div className="mr-2">
            <div className="flex flex-col text-6xl font-bold">
              <h1 className=" flex items-center">Maneja los pedidos de </h1>
              <span></span>
              <h1 className="z-50">tu negocio de forma facil</h1>
              <h1 className="flex items-center">
                por
                <mark className="ml-3 bg-green-100">WhatsApp</mark>
              </h1>
              <div>
                <Badge className="bg-green-100 text-black hover:bg-green-100">
                  Ordenes
                </Badge>
                <Badge className="mx-2 bg-blue-100 text-black hover:bg-blue-100">
                  Pedidos
                </Badge>
                <Badge className="bg-yellow-100 text-black hover:bg-yellow-100">
                  Deliveries
                </Badge>
              </div>
              <p className="mt-3 text-lg font-medium text-gray-600">
                Facilita tu vida y la vida de tus clientes.{" "}
              </p>
              <p className="text-lg font-medium text-gray-600">
                Empieza a recibir tus ordenes de forma sencilla
              </p>
              <div>
                <Button className="mr-2">Iniciar Sesion</Button>
                <Button variant="outline">Registrate</Button>
              </div>
            </div>
          </div>
          <div className="ml-2 flex items-center justify-center rounded-2xl bg-green-50/10 p-8">
            <Image
              src="/OpenDoodles-Coffee.png"
              width={600}
              height={600}
              alt="Hero image - someone driving a bycicle"
            />
          </div>
        </div>
        <div className="mt-44 flex w-full flex-col items-center justify-center px-32">
          <h1 className="text-center text-4xl font-extrabold">
            Potencia la marca de tu negocio de forma gratuita{" "}
            <span>
              Dishes, te facilita el manejo de tus productos, ordenes y pedidos.
            </span>
          </h1>
          <Link
            href="/"
            className={buttonVariants({
              variant: "default",
              className: "mt-10",
            })}
          >
            <Github />
            Star on Github
          </Link>
        </div>
      </div>
      <NoSSR />
      <Image
        src="/Foodies.png"
        className="my-14"
        width={600}
        height={600}
        alt="Hero image - ordering food"
      />
      <div className="mt-20 w-2/4 ">
        <h1 className="text-center text-4xl font-bold">Preguntas Frecuentes</h1>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>¿Cómo funciona Dishes?</AccordionTrigger>
            <AccordionContent>
              Dishes te permite crear un catalogo atractivo con todos los
              productos de tu negocio. Actuando como una tienda virtual para tus
              clientes.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>¿Todo de forma gratuita?</AccordionTrigger>
            <AccordionContent>
              Asi es, la aplicación es completamente gratuita y de codigo
              abierto. Esperamos seguir creando valor de esta forma a largo
              plazo
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>¿Puedo invitar a mi equipo?</AccordionTrigger>
            <AccordionContent>
              Sí, el objetivo de Dishes es permitirte crear un ambiente
              colaborativo para ti y los miembros de tu negocio. La integración
              con WhatsApp, permite que multiples personas puedan tomar varias
              ordenes al mismo tiempo, facilitando el manejo de tu negocio y
              mejorando la experiencia de usuario de tus clientes de forma
              considerable
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>¿Cómo recibo los pagos?</AccordionTrigger>
            <AccordionContent>
              De momento Dishes no puede actuar como intermediario al momento de
              permitirte recibir pagos de tus clientes :/ Pero si puedes
              especificar los medios de pago que acepta tu negocio
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <h1 className="mb-5 mt-60 text-4xl font-bold">
        Crea tu tienda virtual ya mismo
      </h1>
      <Button size="lg">Empieza Ya</Button>
      <Image
        src="/Yuppies-LivingArea.png"
        className="my-14"
        width={600}
        height={600}
        alt="Hero image - ordering food"
      />
    </main>
  );
}
