<template lang="html">
  <div class="">

    <div class="columns is-vcentered">
      <div class="column is-6 is-offset-3">
        <article class="tile is-child box">
        <h1 class="title"></h1>
        <div class="block">

          <label class="label">{{data.labelUsername}}</label>
          <div class="control is-grouped">
            <p class="control is-expanded">
              <input class="input" :class="{'is-danger': !isValalidEmail}" type="email" placeholder="email@email.com" v-model="data.user.username" autofocus :disabled="client.isClient === true">

              <span class="help is-danger" v-show="!isValalidEmail">{{client.message}}</span>
            </p>
            <p class="control">
              <a class="button is-info" @click="searchEmail()" :disabled="client.isClient === true">
                Buscar E-Mail
              </a>
            </p>
            <!-- <p class="control">
              <router-link to="/login">
                <button class="button is-link">Cancelar</button>
              </router-link>
            </p> -->
          </div>

          <div class="" v-show="client.isClient">
            <p class="control has-icon has-icon-right">
              <input class="input" :class="{'is-danger': !isValalidName}" type="hidden" placeholder="" v-model="data.user.client" disabled>
              <span class="icon is-small">
                <i class="fa fa-warning" v-show="!isValalidName"></i>
              </span>
              <span class="help is-danger" v-show="!isValalidName">Cliente inválido!</span>
            </p>

            <!-- <label class="label">Cliente</label>
            <p class="control has-icon has-icon-right">
              <input class="input" :class="{'is-danger': !isValalidName}" type="text" placeholder="" v-model="data.user.clientName" disabled>
              <span class="icon is-small">
                <i class="fa fa-warning" v-show="!isValalidName"></i>
              </span>
              <span class="help is-danger" v-show="!isValalidName">Cliente inválido!</span>
            </p> -->

            <label class="label">Nome</label>
            <p class="control has-icon has-icon-right">
              <input autofocus class="input" :class="{'is-danger': !isValalidName}" type="text" placeholder="Nome" v-model="data.user.name" disabled>
              <span class="icon is-small">
                <i class="fa fa-warning" v-show="!isValalidName"></i>
              </span>
              <span class="help is-danger" v-show="!isValalidName">Nome inválido!</span>
            </p>

            <label class="label">CRM</label>
            <p class="control has-icon has-icon-right">
              <input class="input" v-on:keyup="keymonitor" :class="{'is-danger': !isValalidCRM}" type="text" placeholder="CRM" v-model="data.user.crm" disabled>
              <span class="icon is-small">
                <i class="fa fa-warning" v-show="!isValalidCRM"></i>
              </span>
              <span class="help is-danger" v-show="!isValalidCRM">CRM inválido!</span>
            </p>

            <label class="label">Senha</label>
            <p class="control has-icon has-icon-right">
              <input ref="password" class="input" :class="{'is-danger': !isValalidPassowrd}" type="password" placeholder="Senha" v-model="data.user.password" autofocus>
              <span class="icon is-small">
                <i class="fa fa-warning" v-show="!isValalidPassowrd"></i>
              </span>
              <span class="help is-danger" v-show="!isValalidPassowrd">Senha inválido!</span>
              <span class="help is-danger" v-show="!isValalidPassowrdLong">A senha deve conter entre 6 a 20 caracteres</span>
            </p>

            <!-- <table class="table">
              <thead>
              <tr>
                <th>Hosp./Clima</th>
                <th>CRM</th>
                <th>Dt Nasc.</th>
              </tr>
              </thead>
              <tbody>
                <tr v-for="list in data.clients">
                  <td><a href="#" @click.prevent="record(list)">{{list.clientName}}</a></td>
                  <td><a href="#" @click.prevent="record(list)">{{list.crm}}</a></td>
                  <td><a href="#" @click.prevent="record(list)">{{list.name}}</a></td>
                </tr>
              </tbody>
            </table> -->

            <!-- <label class="label">Tipo</label>
            <p class="control">
              <span class="select">
                <select v-model="data.user.type">
                  <option>Médico</option>
                  <option>Gerencia</option>
                </select>
              </span>
            </p> -->

            <p class="control">
              <label class="checkbox">
                <input type="checkbox" v-model="terms">
                Concordo com os<router-link to="/client/register/terms" class="term">termos do meuclinic</router-link>
              </label>
            </p>
            <p class="control">
              <button class="button is-primary" :disabled="!this.terms" @click="register()">Cadastrar</button>
              <router-link to="/login">
                <button class="button is-link">Cancelar</button>
              </router-link>
            </p>
          </div>

        </div>
      </article>
     </div>
   </div>

   <!-- <modal name="terms-use" height="auto" :scrollable="true" :width="300">
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
          <button class="button is-primary">Aceitar</button>
          <button class="button is-info">Cancelar</button>
        </div>

     </div>
   </modal> -->

  </div>

</template>

<script>
import API_URL from '../../../../config/dev.env'
const api = API_URL.API_URL

export default {
  name: 'Register',
  methods: {
    termsUse () {
      this.$modal.show('terms-use')
    },
    keymonitor (event) {

    },
    validate () {
      if ((this.data.user.password === undefined) || (this.data.user.password === '') || (this.data.user.password === null)) {
        this.isValalidPassowrd = false
        return false
      }
      if ((this.data.user.password.length < 5) || (this.data.user.password.length > 20)) {
        this.isValalidPassowrdLong = false
        return false
      }
    },
    searchEmail () {
      this.client.message = ''
      this.isValalidEmail = true
      this.$http({
        method: 'post',
        url: api + '/users/search-email-doctor',
        data: this.data.user
      }).then((response) => {
        response.data.client.forEach((item) => {
          this.data.clients.push(item.client)
        })
        response.data.client.forEach((item) => {
          this.data.clientsName.push(item.clientName)
        })
        if ((response.data.client === undefined) || (response.data.client === null) || (response.data.client === '')) {
          console.log('nao pode entrar aqui', this.data.user)
          this.client.isClient = false
          this.isValalidEmail = false
          this.client.message = response.data.message
        } else {
          this.isValalidEmail = true
          this.client.isClient = true
          this.data.user.client = [this.data.clients]
          this.data.user.clientName = [this.data.clientsName]
          this.data.user.crm = response.data.client[0].crm
          this.data.user.name = response.data.client[0].name
          this.data.labelUsername = 'Este será seu usuário de acesso'
          this.$refs.password.$el.focus()
          console.log(this.data.user)
        }
      }).catch((error) => {
        if (error.response) {
          this.client.message = error.response.data.message
          this.isValalidEmail = false
          console.log(error.response.data.description)
          console.log(error.response.data)
          console.log(error.response.status)
          console.log(error.response.headers)
        }
      })
    },
    register () {
      if (this.validate() === false) {
        return false
      }
      this.$http({
        method: 'post',
        url: api + '/users/create',
        data: this.data.user
      }).then((response) => {
        this.$router.push('/')
      }).catch((error) => {
        console.log(error)
      })
    }
  },
  data () {
    return {
      data: {
        clients: [],
        clientsName: [],
        user: {
          username: null,
          password: null,
          name: null,
          crm: null,
          type: 'Médico',
          client: [],
          clientName: []
        },
        erro: {
          username: null
        },
        labelUsername: 'Digite seu e-mail cadastrado no Sistema Clinic'
      },
      client: {
        isClient: false,
        message: ''
      },
      terms: false,
      isValalidName: true,
      isValalidEmail: true,
      isValalidCRM: true,
      isValalidPassowrd: true,
      isValalidPassowrdLong: true
    }
  }
}

</script>

<style lang="scss">
  .term { margin-left: 5px;}
</style>
