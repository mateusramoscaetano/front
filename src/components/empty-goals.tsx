import logo from "../assets/in-orbit-logo.svg";
import letsStart from "../assets/illustration_lets-start.svg";
import { Button } from "../components/ui/button";
import { Plus } from "lucide-react";
import { DialogTrigger } from "../components/ui/dialog";

export function EmptyGoals() {
  return (
    <>
      <div className="h-screen w-full flex items-center justify-center flex-col gap-8">
        <img src={logo} alt="logo-in-orbit" />
        <img src={letsStart} alt="logo-in-orbit" />
        <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
          Você ainda não cadastrou nenhuma meta, que tal cadastrar um agora
          mesmo?
        </p>
        <DialogTrigger asChild>
          <Button>
            <Plus className="size-4" />
            Cadastrar meta
          </Button>
        </DialogTrigger>
      </div>
    </>
  );
}
