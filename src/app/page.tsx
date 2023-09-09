import { Button, buttonVariants } from "~/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "~/components/ui/badge";
import { Github } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <div className="px-10 pt-10 md:px-52 md:pt-52">
        <div className="flex w-full flex-1 items-center justify-center">
          <div className="mr-2">
            <div className="flex flex-col text-6xl font-bold">
              <h1 className=" flex items-center">Maneja los pedidos de </h1>
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
                Empieza a recibir tus pedidos de forma sencilla
              </p>
              <div>
                <Button className="mr-2">Iniciar Sesion</Button>
                <Button variant="outline">Registrate</Button>
              </div>
            </div>
          </div>
          <div className="ml-2 hidden items-center justify-center rounded-2xl bg-green-50/10 p-8 lg:flex xl:flex 2xl:flex">
            <Image
              src="/OpenDoodles-Coffee.png"
              width={600}
              height={600}
              alt="Hero image - someone driving a bycicle"
            />
          </div>
        </div>
        <div className="my-44 flex w-full flex-col items-center justify-center">
          <h1 className="text-center text-4xl font-extrabold">
            Potencia la marca de tu negocio de forma gratuita{" "}
            <span className="text-secondary-700">
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
      <div className="relative px-10 text-center md:px-52">
        <h1 className="text-6xl font-bold">
          Tienda. Deliveries. Link in bio. WhatsApp. Clientes. Venta. Cash. Tu
          E-Commerce
        </h1>
        <div className="absolute bottom-[-6%] left-0 right-0 top-auto h-full w-full bg-gradient-to-t from-white to-transparent"></div>
      </div>
      <h1 className="pt-10 text-4xl ">Todo en un solo lugar</h1>
      <Image
        src="/Foodies.png"
        className="my-14"
        width={600}
        height={600}
        alt="Hero image - ordering food"
      />
    </main>
  );
}
