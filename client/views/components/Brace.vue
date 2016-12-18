<template>
  <div class="tile is-ancestor">
    <div class="tile is-parent is-4">
      <article class="tile is-child box">
          <h1 class="title is-5">Options Panel</h1>
          <div class="block">
            <div class="control is-horizontal">
              <div class="control-label">
                <label class="label">Modes</label>
              </div>
              <div class="control">
                <div class="select is-fullwidth">
                  <select v-model="selected.mode">
                    <option v-for="mode in modes" :value="mode.name">{{mode.caption}}</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="control is-horizontal">
              <div class="control-label">
                <label class="label">Themes</label>
              </div>
              <div class="control">
                <div class="select is-fullwidth">
                  <select v-model="selected.theme">
                    <option v-for="theme in themes" :value="theme.name">{{theme.caption}}</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="control is-horizontal">
              <div class="control-label">
                <label class="label">Font Size</label>
              </div>
              <div class="control">
                <div class="select is-fullwidth">
                  <select v-model="selected.fontsize">
                    <option v-for="fsize in fontsize" :value="fsize">{{fsize}}</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="control is-horizontal">
              <div class="control-label">
                <label class="label">Code Folding</label>
              </div>
              <div class="control">
                <div class="select is-fullwidth">
                  <select v-model="selected.codefolding">
                    <option v-for="cfolding in codefolding" :value="cfolding">{{cfolding}}</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="control is-horizontal">
              <div class="control-label">
                <label class="label">Soft Wrap</label>
              </div>
              <div class="control">
                <div class="select is-fullwidth">
                  <select v-model="selected.softwrap">
                    <option v-for="swrap in softwrap" :value="swrap">{{swrap}}</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="control is-horizontal">
              <div class="control-label">
                <label class="label">Select Style</label>
              </div>
              <div class="control">
                <div class="select is-fullwidth">
                  <select v-model="selected.selectionstyle">
                    <option value="text">text</option>
                    <option value="line">line</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="control is-horizontal">
              <div class="control-label">
                <label class="label">Highlight Line</label>
              </div>
              <div class="control" style="margin-top: 10px;">
                <label class="radio">
                  <input type="radio" value="true" v-model="selected.highlightline">
                  Yes
                </label>
                <label class="radio">
                  <input type="radio" value="false" v-model="selected.highlightline">
                  No
                </label>
              </div>
            </div>
          </div>
        </article>
    </div>
    <div class="tile is-parent">
      <article class="tile is-child box">
        <brace style="height: 100%" 
          :fontsize="this.selected.fontsize" 
          :theme="this.selected.theme" 
          :mode="this.selected.mode"
          :codefolding="this.selected.codefolding"
          :softwrap="this.selected.softwrap"
          :selectionstyle="this.selected.selectionstyle"
          :highlightline="this.selected.highlightline === 'true'">
        </brace>
      </article>
    </div>
  </div>
</template>

<script>
import Brace from 'vue-bulma-brace'
// this is just an example. you don't want to import those things.
import * as brace from 'brace'
import 'brace/ext/modelist'
import 'brace/ext/themelist'
const modelist = brace.acequire('ace/ext/modelist')
const themelist = brace.acequire('ace/ext/themelist')

export default {
  components: {
    Brace
  },

  data () {
    return {
      modes: modelist.modes,
      themes: themelist.themes,
      fontsize: ['12px', '13px', '14px', '16px', '18px', '20px', '22px', '24px'],
      codefolding: ['manual', 'markbegin', 'markbeginend'],
      softwrap: ['off', '50', 'free'],
      selected: {
        mode: 'json',
        theme: 'github',
        fontsize: '12px',
        codefolding: 'markbegin',
        softwrap: 'free',
        selectionstyle: 'text',
        highlightline: 'true'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.control-label {
  min-width: 100px;
}
</style>