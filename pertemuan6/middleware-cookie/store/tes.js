export const state = () => {
return {
    authenticated: false
}
}
export const mutations = {
    set(sate){
        sate.authenticated = true
    }
}
export const actions = {
    coba(tes){
        tes.commit('set')
    }
}