import { Search } from "lucide-react";

export default function Home() {
  return (
    <>
      <header>
        Gerenciamento de Funcionários
      </header>
      <div className="space-y-6 mt-8">
        <div className='flex items-center gap-3 px-4 w-72 py-1.5 border border-white/10 rounded-lg' >
          <input 
            className="bg-transparent flex-1 outline-none border-0 p-0 text-sm focus:ring-0" 
            placeholder="Buscar funcionário..." 
          />
          <Search className='size-4 ' />
        </div>
        <section className="border border-white/10 rounded">
          <table className="w-full">
            <thead className="border-b border-white/10">
              <tr>
                <th className="py-3 px-4 text-sm font-semibold text-left">Nome</th>
                <th className="py-3 px-4 text-sm font-semibold text-left">Email</th>
                <th className="py-3 px-4 text-sm font-semibold text-left">Telefone</th>
                <th className="py-3 px-4 text-sm font-semibold text-left">Salário</th>
                <th className="py-3 px-4 text-sm font-semibold text-left">Data</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3 px-4 text-sm text-zinc-200">Rodrigo Mesquita</td>
                <td className="py-3 px-4 text-sm text-zinc-200">dev.rodrigomesquita@gmail.com</td>
                <td className="py-3 px-4 text-sm text-zinc-200">55+ (24) 9 99876 9562</td>
                <td className="py-3 px-4 text-sm text-zinc-200">R$ 8.000,00</td>
                <td className="py-3 px-4 text-sm text-zinc-200">28/12/2024</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </>
  );
}
