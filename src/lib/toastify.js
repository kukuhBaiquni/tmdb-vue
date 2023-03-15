import {toast} from 'vue3-toastify'

const notify = ({
  type = 'success',
  message = 'Toast message'
}) => {
  toast[type](message, {
    hideProgressBar: true,
    position: toast.POSITION.BOTTOM_RIGHT,
    theme: 'colored'
  })
}

export default notify