import container from '../src/ioc/container'


interface Hello {
    name: string
}

const me: Hello = {
    name: 'me',
}

it('works', () => {
    expect(me.name).toBe('me')
})
