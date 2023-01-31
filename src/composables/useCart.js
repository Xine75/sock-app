import {computed, onMounted, ref, watch} from "vue";

export default function useCart () {
    const cart = ref([])
    const cartCount = computed(() => {
        if (cart.value === null) {
            return 0
        } else {
            return cart.value.length
        }
    })

    onMounted (() => {
        fetch('http://localhost:5173/cart')
            .then(resp => resp.json())
            .then(data => cart.value = data.content)
    })
    watch(cart, (value, oldValue) => {
        if (oldValue === null) return

            fetch('http://localhost:5173/cart', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    content: value
                })
            })
    })

    const updateCart = (id) => {
        cart.value = cart.value.concat(id)
        console.log('cart.value: ', cart.value)
    }
    return { cartCount, updateCart }
}
