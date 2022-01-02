export const state = () => ({
    search:'',
    blog:[],
    project:[]
})
export const actions = {
    search(context,search){
        context.commit('search',search)
    },
    blog(context,blog){
        context.commit('blog',blog)
    },
    project(context,project){
        context.commit('project',project)
    },
    
    
}
export const mutations ={
    search(state,search){
        state.search = search;
    },
    blog(state,blog){
        state.blog = blog;
    },
    project(state,project){
        state.project = project;
    },
}