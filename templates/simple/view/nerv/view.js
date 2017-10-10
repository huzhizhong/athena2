/**
 * @author <%= username %>
 * @date <%= date %>
 * @desc <%= description %>
 */
import Nerv from 'nervjs'

class <%= _.upperFirst(_.camelCase(pageName)) %> extends Nerv.Component {
  constructor () {
    super(...arguments)
    this.state = {}
  }

  render () {
    return (
      <div className='<%= pageName %>'>
      </div>
    )
  }
}

module.exports = <%= _.upperFirst(_.camelCase(conf.pageName)) %>