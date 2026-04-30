import { Shield, Users, Target, Trophy } from "lucide-react"

export function AboutUs() {
  return (
    <section id="nosotros" className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-primary/5 to-transparent pointer-events-none skew-x-12 transform translate-x-1/4" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <div className="inline-block mb-4">
              <span className="text-primary font-bold text-sm uppercase tracking-wider">// Sobre nosotros</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 leading-tight">
              No somos un clan,
              <br />
              <span className="text-primary">somos un proyecto</span>
            </h2>
            <p className="text-base md:text-lg leading-relaxed mb-6 md:mb-8 text-muted-foreground">
              Vyper Team es una comunidad enfocada en el crecimiento competitivo, la disciplina y el trabajo en equipo.
              Un proyecto serio, organizado y con visión a largo plazo.
            </p>

            <div className="bg-card border-l-4 border-primary p-4 md:p-6 rounded-r-lg">
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                El servidor de Discord es el corazón de Vyper Team. Aquí nos organizamos, entrenamos y construimos una
                familia competitiva.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 md:gap-4">
            <div className="bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border border-border/50 rounded-xl md:rounded-2xl p-4 md:p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group">
              <Shield className="h-6 w-6 md:h-8 md:w-8 text-primary mb-3 md:mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-base md:text-lg mb-1 md:mb-2">Disciplina</h3>
              <p className="text-xs md:text-sm text-muted-foreground">Compromiso en cada partida</p>
            </div>

            <div className="bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border border-border/50 rounded-xl md:rounded-2xl p-4 md:p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group">
              <Users className="h-6 w-6 md:h-8 md:w-8 text-primary mb-3 md:mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-base md:text-lg mb-1 md:mb-2">Equipo</h3>
              <p className="text-xs md:text-sm text-muted-foreground">Juntos somos más fuertes</p>
            </div>

            <div className="bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border border-border/50 rounded-xl md:rounded-2xl p-4 md:p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group">
              <Target className="h-6 w-6 md:h-8 md:w-8 text-primary mb-3 md:mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-base md:text-lg mb-1 md:mb-2">Respeto</h3>
              <p className="text-xs md:text-sm text-muted-foreground">Hacia todos los jugadores</p>
            </div>

            <div className="bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border border-border/50 rounded-xl md:rounded-2xl p-4 md:p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group">
              <Trophy className="h-6 w-6 md:h-8 md:w-8 text-primary mb-3 md:mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-base md:text-lg mb-1 md:mb-2">Excelencia</h3>
              <p className="text-xs md:text-sm text-muted-foreground">Aspiramos a ser los mejores</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
