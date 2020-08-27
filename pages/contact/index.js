import { connect } from 'react-redux'
import { setPostContact } from 'ducks/PhoneBook'
import { wrapper } from 'wrapper'
import Component from './component'

export const getStaticProps = wrapper.getStaticProps(
  async ({ store, preview }) => {
    const res = await fetch('https://randomuser.me/api/?results=50')
    const posts = await res.json()
    store.dispatch(setPostContact(posts))
  },
)

function mapStateToProps(state) {
  return {
    posts: state.PhoneBook.contacts,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    inc(val) {
      dispatch(setPostContact(val))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component)
