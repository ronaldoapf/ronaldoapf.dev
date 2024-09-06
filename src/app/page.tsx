import { Badge } from '@/components/ui/badge'
import { skills, workExperiences } from './content'
import { Fragment } from 'react'

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto container space-y-6 p-4">
      <section className="flex items-center justify-between">
        <div className="max-w-[500px]">
          <h1 className="text-3xl font-bold">Hello, World!</h1>
          <span className="inline-block text-sm md:text-xl">
            Desenvolvedor de Software.
          </span>
        </div>
        <img
          alt="Ronaldo's profile picture"
          className="rounded-full w-28 h-28"
          src="https://github.com/ronaldoapf.png"
        />
      </section>

      <section>
        <h1 className="font-semibold text-xl">About</h1>
        <p className="text-sm">
          Desenvolvedor full-stack com sólida experiência em tecnologias do
          ecossistema JavaScript, especialmente React. Anseio por desafios e
          aprendizado contínuo, buscando sempre a flexibilidade e a colaboração
          para alcançar um trabalho de equipe eficaz. Tenho um histórico de
          sucesso na criação de aplicações web responsivas. Além do meu foco
          atual no desenvolvimento de aplicações com React, possuo experiência
          com PHP, Node, Java e Python. Sou conhecido por minha habilidade de
          colaborar efetivamente com colegas, garantindo que todos na equipe
          possam crescer e alcançar seus objetivos. Estou em busca de
          oportunidades para desenvolvedor front-end ou full-stack que me
          permitam aplicar minhas habilidades e continuar evoluindo como
          profissional, mesmo que isso exija aprender novas tecnologias.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-semibold text-xl">Work Experience</h2>
        {workExperiences.map((item, index) => {
          return (
            <div className="flex justify-between" key={index}>
              <div className="flex gap-4 items-center">
                <img
                  src={item.logo}
                  alt="Grao Direto"
                  className="rounded-full w-12 h-12 object-cover"
                />
                <div className="flex flex-col justify-center">
                  <p className="font-semibold text-sm">{item.company}</p>
                  <p className="font-light text-xs">{item.role}</p>
                </div>
              </div>
              <p className="text-xs md:text-sm text-foreground text-right">
                {item.date}
              </p>
            </div>
          )
        })}
      </section>

      <section className="space-y-4">
        <h2 className="font-semibold text-xl">Education</h2>

        <div className="flex justify-between">
          <div className="flex gap-4 items-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1jDI1RNinnEg28bF2N7tOIMZgv93qN4DCYuHupdqVDkPdf5cGbjGEfad-KlCLUTlLDUo&usqp=CAU"
              alt="Grao Direto"
              className="rounded-full w-12 h-12 object-cover"
            />
            <div className="flex flex-col justify-center">
              <p className="font-semibold text-sm">
                Universidade Federal de Uberlândia
              </p>
              <p className="font-light text-xs">
                Bacharel em Sistemas de Informação
              </p>
            </div>
          </div>
          <p className="text-xs md:text-sm text-foreground text-right">
            2016 - 2023
          </p>
        </div>
      </section>

      <section>
        <h2 className="font-semibold text-xl mb-2">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => {
            return (
              <Fragment key={skill.title}>
                {skill.items.map((item) => {
                  return <Badge key={item}>{item}</Badge>
                })}
              </Fragment>
            )
          })}
        </div>
      </section>
    </main>
  )
}
