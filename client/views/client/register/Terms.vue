<template lang="html">
  <div class="">
    <div class="terms">
      <h2 class="title is-2">Apresentação e definições</h2>

        <p>
          Este site é de propriedade, mantido, e operado por <b>spitzer.io</b>. Este documento relaciona os termos e condições que devem ser observados
          pela <b>spitzer.io</b> e pelos Usuários (conforme definição abaixo) na utilização do Site, de suas ferramentas e de suas funcionalidades.
          A <b>spitzer.io</b> faculta acesso e utilização do Site a quaisquer Usuários. O Usuário declara ter lido e aceito estes Termos e Condições de Uso e
          das Políticas antes de ter iniciado a utilização do Site. Caso o Usuário não aceite estes Termos e Condições de Uso, não lhe será
          permitido acesso a áreas restritas do Site. Para os fins destes Termos e Condições de Uso, bem como das Políticas, os termos abaixo terão os
          seguintes significados:
        </p>

      <br />
      <h2 class="title is-2">Regras de utilização do Site</h2>

         <p>
           O Usuário obriga-se a utilizar o Site respeitando e observando estes Termos e Condições de Uso, bem como a legislação vigente, os costumes
           e a ordem pública. Desta forma, o Usuário concorda que não poderá:
         </p>
         <br />
         <p>(i) lesar direitos de terceiros, independentemente de sua natureza, em qualquer momento, inclusive no decorrer do uso do Site;</p>
         <p>(ii) executar atos que limitem ou impeçam o acesso e a utilização do Site, em condições adequadas, aos demais Usuários;</p>
         <p>(iii) acessar ilicitamente o Site ou sistemas informáticos de terceiros relacionados ao Site ou à <b>spitzer.io</b> sob qualquer meio ou forma;</p>
         <p>(iv) difundir programas ou vírus informáticos suscetíveis de causar danos de qualquer natureza, inclusive em equipamentos e sistemas da <b>spitzer.io</b> ou de terceiros;</p>
         <p>(v) utilizar mecanismos que não os expressamente habilitados ou recomendados no Site para obtenção de informações, conteúdos e serviços;</p>
         <p>(vi) realizar quaisquer atos que de alguma forma possam implicar qualquer prejuízo ou dano à <b>spitzer.io</b> ou a outros Usuários;</p>
         <p>(vii) acessar áreas de programação do Site, bases de dados ou qualquer outro conjunto de informações que escape às áreas públicas ou restritas do Site;</p>
         <p>(viii) realizar ou permitir engenharia reversa, traduzir, modificar, alterar a linguagem, compilar, decompilar, modificar, reproduzir, alugar, sublocar, divulgar, transmitir, distribuir, usar ou, de outra maneira, dispor do Site ou das ferramentas e funcionalidades nele disponibilizadas sob qualquer meio ou forma, inclusive de modo a violar direitos da <b>spitzer.io</b> (inclusive de Propriedade Intelectual da <b>spitzer.io</b>) e/ou de terceiros;</p>
         <p>(ix) praticar ou participar de qualquer ato que constitua uma violação de qualquer direito da <b>spitzer.io</b> (inclusive de Propriedade Intelectual da <b>spitzer.io</b>) ou de terceiros ou ainda de qualquer lei aplicável, ou agir sob qualquer meio ou forma que possa contribuir com tal violação;</p>
         <p>(x) interferir na segurança ou cometer usos indevidos contra o Site ou qualquer recurso do sistema, rede ou serviço conectado ou que possa ser acessado por meio do Site, devendo acessar o Site apenas para fins lícitos e autorizados;</p>
         <p>(xi) utilizar o domínio da <b>spitzer.io</b> para criar links ou atalhos a serem disponibilizados em e-mails não solicitados (mensagens spam) ou em websites de terceiros ou do próprio Usuário ou, ainda, para realizar qualquer tipo de ação que possa vir a prejudicar a <b>spitzer.io</b> ou terceiros;</p>
         <p>(xii) utilizar aplicativos automatizados de coleta e seleção de dados para realizar operações massificadas ou para quaisquer finalidades ou, ainda, para coletar e transferir quaisquer dados que possam ser extraídos do Site para fins não permitidos ou ilícitos;</p>
         <p>(xiii) utilizar as ferramentas e funcionalidades do Site para difundir mensagens não relacionadas com o Site ou com as finalidades do Site, incluindo mensagens de cunho racista, étnico, político, religioso, cultural ou depreciativo, difamatório e/ou calunioso de qualquer pessoa ou grupo social. O Usuário concorda em indenizar, defender e isentar a <b>spitzer.io</b> de qualquer reclamação, notificação, intimação ou ação judicial ou extrajudicial, ou ainda de qualquer responsabilidade, dano, custo ou despesa decorrente de qualquer violação e/ou infração cometida pelo Usuário ou qualquer pessoa agindo em seu nome, com seu consentimento ou tolerância, em relação ao Site (inclusive com relação a qualquer disposição destes Termos e Condições de Uso), inclusive qualquer pessoa que tenha obtido os dados do Usuário relacionados a sua Conta de Acesso ou a sua navegação no Site. A <b>spitzer.io</b> poderá, a seu exclusivo critério, bloquear, restringir, desabilitar ou impedir o acesso de qualquer Usuário ao Site, total ou parcialmente, sem qualquer aviso prévio, sempre que for detectada uma conduta inadequada do Usuário, sem prejuízo das medidas administrativas, extrajudiciais e judiciais que julgar convenientes.</p>
         </p>
     </div>

     <div class="buttons">
       <router-link to="/client/register/register">
         <button class="button is-primary">Concordo</button>
       </router-link>

       <router-link to="/login">
         <button class="button is-link">Cancelar</button>
       </router-link>
     </div>

  </div>
</template>

<script>
export default {
  name: 'TermService'
}
</script>

<style lang="scss" scoped>
  .buttons { margin-top: 50px; text-align: right; }
</style>
