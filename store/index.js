export const state = () => ({
    search:'',
})
export const actions = {
    search(context,search){
        context.commit('search',search)
    },
    
    
}
export const mutations ={
    search(state,search){
        state.search = search;
    },
}