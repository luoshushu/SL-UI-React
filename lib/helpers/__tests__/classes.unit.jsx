import classes from '../classes'
describe('classes', () => {
  it('接受一个calssName', () => {
    const result = classes('a')
    expect(result).toEqual('a')
  })
  it('接受一个undefined', () => {
    const result = classes('b',undefined)
    expect(result).toEqual('b')
  })
  it('接受2个calssName', () => {
    const result = classes('a','b')
    expect(result).toEqual('a b')
  })
  it('接受一个false', () => {
    const result = classes('a',false)
    expect(result).toEqual('a')
  })
  it('接受奇怪的值', () => {
    const result = classes('a',undefined,'中文',false,null)
    expect(result).toEqual('a 中文')
  })
  it('接受空字符', () => {
    const result = classes()
    expect(result).toEqual("")
  })
})