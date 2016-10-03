<template>
  <div>
    <div class="tile is-ancestor">
      <div class="tile is-parent is-2">
        <article class="tile is-child box">
          <h1 class="title">Controls</h1>
          <div class="block">
            <label class="label">Name</label>
            <p class="control">
              <input class="input" type="text" placeholder="Text input">
            </p>
            <label class="label">Username</label>
            <p class="control has-icon has-icon-right">
              <input class="input is-success" type="text" placeholder="Text input" value="bulma">
              <i class="fa fa-check"></i>
              <span class="help is-success">This username is available</span>
            </p>
            <label class="label">Email</label>
            <p class="control has-icon has-icon-right">
              <input class="input is-danger" type="text" placeholder="Email input" value="hello@">
              <i class="fa fa-warning"></i>
              <span class="help is-danger">This email is invalid</span>
            </p>
            <label class="label">Subject</label>
            <p class="control">
              <span class="select">
                <select>
                  <option>Select dropdown</option>
                  <option>With options</option>
                </select>
              </span>
            </p>
            <label class="label">Message</label>
            <p class="control">
              <textarea class="textarea" placeholder="Textarea"></textarea>
            </p>
            <p class="control">
              <label class="checkbox">
                <input type="checkbox">
                Remember me
              </label>
            </p>
            <p class="control">
              <label class="radio">
                <input type="radio" name="question">
                Yes
              </label>
              <label class="radio">
                <input type="radio" name="question">
                No
              </label>
            </p>
            <p class="control">
              <button class="button is-primary">Submit</button>
              <button class="button is-link">Cancel</button>
            </p>
          </div>
        </article>
      </div>

      <div class="tile is-parent is-2">
        <article class="tile is-child box">
          <h1 class="title">Colors</h1>
          <div class="block">
            <p class="control">
              <input class="input is-primary" type="text" placeholder="Primary input">
            </p>
            <p class="control">
              <input class="input is-info" type="text" placeholder="Info input">
            </p>
            <p class="control">
              <input class="input is-success" type="text" placeholder="Success input">
            </p>
            <p class="control">
              <input class="input is-warning" type="text" placeholder="Warning input">
            </p>
            <p class="control">
              <input class="input is-danger" type="text" placeholder="Danger input">
            </p>
          </div>
        </article>
      </div>

      <div class="tile is-parent is-2">
        <article class="tile is-child box">
          <h1 class="title">Sizes</h1>
          <div class="block">
            <p class="control">
              <input class="input is-small" type="text" placeholder="Small input">
            </p>
            <p class="control">
              <input class="input" type="text" placeholder="Normal input">
            </p>
            <p class="control">
              <input class="input is-medium" type="text" placeholder="Medium input">
            </p>
            <p class="control">
              <input class="input is-large" type="text" placeholder="Large input">
            </p>
          </div>
        </article>
      </div>

      <div class="tile is-parent is-3">
        <article class="tile is-child box">
          <h1 class="title">States</h1>
          <div class="block">
            <h2 class="subtitle">Loading</h2>
            <p class="control is-loading">
              <input class="input" type="text" placeholder="Loading input">
            </p>
            <p class="control is-loading">
              <textarea class="textarea" placeholder="Loading textarea"></textarea>
            </p>
          </div>
          <div class="block">
            <h2 class="subtitle">Disabled</h2>
            <p class="control">
              <input class="input" type="text" placeholder="Disabled input" disabled>
            </p>
            <p class="control">
              <textarea class="textarea" placeholder="Disabled textarea" disabled></textarea>
            </p>
            <p class="control">
              <label class="checkbox is-disabled">
                <input type="checkbox" disabled>
                Remember me
              </label>
            </p>
            <p class="control">
              <label class="radio is-disabled">
                <input type="radio" name="question" disabled>
                Yes
              </label>
              <label class="radio is-disabled">
                <input type="radio" name="question" disabled>
                No
              </label>
            </p>
            <p class="control">
              <button class="button is-primary" disabled>Submit</button>
              <button class="button" disabled>Cancel</button>
            </p>
          </div>
        </article>
      </div>

      <div class="tile is-parent is-3">
        <article class="tile is-child box">
          <h1 class="title">With Font Awesome icons</h1>
          <div class="block">
            <p class="control has-icon">
              <input class="input" type="email" placeholder="Email">
              <i class="fa fa-envelope"></i>
            </p>
            <p class="control has-icon">
              <input class="input" type="password" placeholder="Password">
              <i class="fa fa-lock"></i>
            </p>
            <p class="control">
              <button class="button is-success">
                Login
              </button>
            </p>
          </div>
        </article>
      </div>
    </div>

    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <h1 class="title">Addons</h1>
          <div class="columns">
            <div class="column">
              <p class="control has-addons">
                <input class="input" type="text" placeholder="Find a repository">
                <a class="button is-info">Search</a>
              </p>
            </div>
            <div class="column">
              <p class="control has-addons">
                <span class="select">
                  <select>
                    <option>$</option>
                    <option>£</option>
                    <option>€</option>
                  </select>
                </span>
                <input class="input is-expanded" type="text" placeholder="Amount of money">
                <a class="button is-success">
                  Transfer
                </a>
              </p>
            </div>
            <div class="column">
              <p class="control has-addons has-addons-centered">
                <span class="select">
                  <select>
                    <option>$</option>
                    <option>£</option>
                    <option>€</option>
                  </select>
                </span>
                <input class="input" type="text" placeholder="Amount of money">
                <a class="button is-success">
                  Transfer
                </a>
              </p>
            </div>
            <div class="column">
              <p class="control has-addons has-addons-right">
                <span class="select">
                  <select>
                    <option>$</option>
                    <option>£</option>
                    <option>€</option>
                  </select>
                </span>
                <input class="input" type="text" placeholder="Amount of money">
                <a class="button is-success">
                  Transfer
                </a>
              </p>
            </div>
            <div class="column">
              <div class="control is-grouped">
                <p class="control is-expanded">
                  <input class="input" type="text" placeholder="Find a repository">
                </p>
                <p class="control">
                  <a class="button is-info">
                    Search
                  </a>
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>

    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <h1 class="title">Horizontal form</h1>
          <div class="block">
            <div class="control is-horizontal">
              <div class="control-label">
                <label class="label">From</label>
              </div>
              <div class="control is-grouped">
                <p class="control is-expanded">
                  <input class="input" type="text" placeholder="Name">
                </p>
                <p class="control is-expanded">
                  <input class="input" type="email" placeholder="Email">
                </p>
              </div>
            </div>
            <div class="control is-horizontal">
              <div class="control-label">
                <label class="label">Subject</label>
              </div>
              <div class="control">
                <div class="select is-fullwidth">
                  <select>
                    <option>General enquiry</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="control is-horizontal">
              <div class="control-label">
                <label class="label">Question</label>
              </div>
              <div class="control">
                <textarea class="textarea" placeholder="Explain how we can help you"></textarea>
              </div>
            </div>
            <div class="control is-horizontal">
              <div class="control-label">
                <label class="label"></label>
              </div>
              <div class="control">
                <button class="button is-primary">Submit</button>
                <button class="button is-link">Cancel</button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>

    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <h1 class="title">Cleave.js - Format your &lt;input/&gt; content when you are typing</h1>
          <div class="block">
            <div class="control">
              <label class="label">Credit card number formatting</label>
              <cleave class="input" placeholder="Enter credit card number" :options="{ creditCard: true }"></cleave>
            </div>
            <div class="control">
              <label class="label">Phone number formatting</label>
              <cleave class="input" type="tel" placeholder="Enter phone number" :options="{ phone: true, phoneRegionCode: 'cn' }"></cleave>
            </div>
            <div class="control">
              <label class="label">Date formatting</label>
              <cleave class="input" placeholder="YYYY/MM/DD" :value="'20160901'" :options="{ date: true, datePattern: ['Y', 'm', 'd'] }"></cleave>
            </div>
            <div class="control">
              <cleave class="input" placeholder="MM/YY" :options="{ date: true, datePattern: ['m', 'y'] }"></cleave>
            </div>
            <div class="control">
              <label class="label">Numeral formatting</label>
              <cleave class="input" placeholder="Enter numeral" :options="{ numeral: true, numeralThousandsGroupStyle: 'thousand' }"></cleave>
            </div>
            <div class="control">
              <label class="label">Custom options</label>
              <cleave class="input" placeholder="Blocks: [4, 3, 3, 4]" :options="{ blocks: [4, 3, 3, 4], uppercase: true }"></cleave>
            </div>
            <div class="control">
              <cleave class="input" placeholder="Delimiter: '·'" :options="{ delimiter: '·', blocks: [3, 3, 3, 3], uppercase: true }"></cleave>
            </div>
            <div class="control">
              <cleave class="input" :options="{ prefix: 'PREFIX', delimiter: '-', blocks: [6, 4, 4, 4], uppercase: true }"></cleave>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import Cleave from 'vue-cleave'
import 'cleave.js/dist/addons/cleave-phone.cn'

export default {
  components: {
    Cleave
  }
}
</script>

<style scoped>
.button {
  margin: 5px 0 0;
}

.control .button {
  margin: inherit;
}
</style>
