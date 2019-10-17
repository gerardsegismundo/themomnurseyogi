const counter = (() => {
  const shit = () => console.log('shit')

  return {
    shit
  }
})()

const shit = counter.shit

shit()
