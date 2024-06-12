export default oauth.githubEventHandler({
    config: {
        emailRequired: true
    },
    async onSuccess(event, { user, tokens }) {
        await setUserSession(event, {
            user: {
                githubId: user.id
            }
        })
        return sendRedirect(event, '/dashboard')
    },
})