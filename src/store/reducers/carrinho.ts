import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Game } from '../../App'

type CarrinhoState = {
  itens: Game[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Game>) => {
      const newItem = action.payload

      if (state.itens.find((item) => item.id === newItem.id)) {
        alert('Item já adicionado')
      } else {
        state.itens.push(newItem)
        console.log(`Itens: ${state.itens}`)
      }
    }
  }
})

export const { adicionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
