import { Crown, Shield } from "lucide-react"
import Image from "next/image"

const leadership = [
  {
    name: "Rey",
    username: "unsolorey",
    role: "CEO / Fundador",
    icon: Crown,
    description: "Creador y líder de Vyper Team",
  },
]

const staffMembers = [
  { name: "| VYPER TEAM", username: "simply.ex" },
  { name: "BewdeuS", username: "youngcl" },
  { name: "Diogen3s", username: "diogen3sbs" },
  { name: "Elmox.", username: "elmox." },
  { name: "LIDER VYPER FITULA", username: "fitula" },
  { name: "Rob", username: "rob8412" },
  { name: "TEMU ROY BS", username: "roy300" },
  { name: "VYP JUXN", username: "juanxam_02523" },
  { name: "VYPSalomón", username: "amatsuujin" },
]

export function Staff() {
  return (
    <section
      id="staff"
      className="py-16 md:py-20 lg:py-28 bg-gradient-to-b from-secondary/30 to-transparent relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 uppercase tracking-tight">
            Staff y <span className="text-primary">Liderazgo</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-xl leading-relaxed">El equipo que lidera Vyper Team</p>
        </div>

        <div className="max-w-4xl mx-auto mb-12 md:mb-16">
          <h3 className="text-2xl md:text-3xl font-black text-center mb-8 md:mb-10 text-primary">Liderazgo</h3>
          <div className="flex justify-center px-4">
            {leadership.map((leader, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-card via-card to-card/50 border-2 border-primary/50 rounded-xl md:rounded-2xl p-6 md:p-8 text-center hover:border-primary hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-2 max-w-md w-full"
              >
                <div className="w-48 h-48 md:w-56 md:h-56 mx-auto mb-4 md:mb-6 rounded-xl overflow-hidden ring-4 ring-primary/30 shadow-2xl shadow-primary/20">
                  <Image
                    src="/roy-avatar.png"
                    alt="Rey - CEO Vyper Team"
                    width={224}
                    height={224}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <h3 className="font-bold text-xl md:text-2xl mb-2">{leader.name}</h3>
                <p className="text-sm md:text-base text-muted-foreground mb-2 md:mb-3 font-mono">@{leader.username}</p>
                <p className="text-sm md:text-base font-bold text-primary mb-2 md:mb-3">{leader.role}</p>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{leader.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-black text-center mb-8 md:mb-10 text-primary">Staff</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {staffMembers.map((member, index) => (
              <div
                key={index}
                className="bg-card/50 backdrop-blur-sm border-2 border-border/50 rounded-lg md:rounded-xl p-4 md:p-5 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-primary/30 to-primary/10 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                    <Shield className="h-6 w-6 md:h-7 md:w-7 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-sm md:text-base truncate">{member.name}</h4>
                    <p className="text-xs md:text-sm text-muted-foreground truncate font-mono">@{member.username}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 md:mt-16 max-w-3xl mx-auto text-center">
          <p className="text-muted-foreground text-sm md:text-lg leading-relaxed">
            Nuestro equipo de liderazgo y staff trabaja constantemente para mantener la organización, disciplina y
            dirección de Vyper Team, asegurando el crecimiento continuo de nuestra comunidad.
          </p>
        </div>
      </div>
    </section>
  )
}
