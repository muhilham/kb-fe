import React from 'react'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import CssBaseline from '@material-ui/core/CssBaseline'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import OutlinedInput from '@material-ui/core/OutlinedInput'

const Prob = (props) => (
  <Paper elevation={3} style={{ padding: 25, marginTop: 25 }}>
    <Box my={2}>
      <Typography variant="h6" component="h2" gutterBottom>
        {props.title}
      </Typography>
      <FormControl variant="outlined">
        <InputLabel htmlFor="component-outlined">X</InputLabel>
        <OutlinedInput id="component-outlined" value={props.input} onChange={props.handleInput} label="Name" />
      </FormControl>
      {props.children}
      <Box>
        result:
        {' '}
        {props.result}
      </Box>
    </Box>
  </Paper>
)

function App(props) {
  const [sumX, setSumX] = React.useState('')
  const [sumY, setSumY] = React.useState('')
  const [nPrime, setPrimeN] = React.useState('')
  const [nPrimeResult, setPrimeNResult] = React.useState('')

  const [nFibonacci, setFibonacciN] = React.useState('')
  const [nFibonacciResult, setFibonacciNResult] = React.useState('')

  const [multiplyX, setMultiplyX] = React.useState('')
  const [multiplyY, setMultiplyY] = React.useState('')

  function primeFactorsTo(max) {
    let i = 0
    const primes = []
    const isPrime = (num) => {
      const boundary = Math.floor(Math.sqrt(num))
      for (let i = 2; i <= boundary; i++) if (num % i === 0) return false
      return num >= 2
    }
    while (primes.length < max) {
      i++
      if (isPrime(i)) {
        primes.push(i)
      }
    }

    return primes
  }

  function fibonacciFactorsTo(max) {
    let i
    const fib = []

    fib[0] = 0
    fib[1] = 1
    for (i = 2; i < max; i++) {
      fib[i] = fib[i - 2] + fib[i - 1]
    }
    return fib
  }

  const handleInput = (fn) => (event) => {
    if (isNaN(event.target.value)) {
      return false
    }
    return fn(event.target.value)
  }

  const handlePrimeN = (event) => {
    if (isNaN(event.target.value)) {
      return false
    }
    const N = parseFloat(event.target.value)
    setPrimeN(event.target.value)
    setPrimeNResult(primeFactorsTo(N).join(','))
  }

  const handleFibonacciN = (event) => {
    if (isNaN(event.target.value)) {
      return false
    }
    const N = parseFloat(event.target.value)
    setFibonacciN(event.target.value)
    setFibonacciNResult(fibonacciFactorsTo(N).join(','))
  }

  const sumXY = parseFloat(sumX) + parseFloat(sumY)
  const multiplyXY = parseFloat(multiplyX, 10) * parseFloat(multiplyY, 10)
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box my={4}>
          <AppBar>
            <Toolbar>
              <Typography variant="h6">Kita Bisa FE</Typography>
            </Toolbar>
          </AppBar>
          <Toolbar id="back-to-top-anchor" />
          <Container>
            <Prob
              title="1.  Sum X & Y, and print the result"
              input={sumX}
              handleInput={handleInput(setSumX)}
              result={isNaN(sumXY) ? '' : sumXY}
            >
              <FormControl variant="outlined">
                <InputLabel htmlFor="component-outlined">Y</InputLabel>
                <OutlinedInput id="component-outlined" value={sumY} onChange={handleInput(setSumY)} label="Y" />
              </FormControl>
            </Prob>

            <Prob
              title="2.  Multiply X & Y, and print the result"
              input={multiplyX}
              handleInput={handleInput(setMultiplyX)}
              result={isNaN(multiplyXY) ? '' : multiplyXY}
            >
              <FormControl variant="outlined">
                <InputLabel htmlFor="component-outlined">Y</InputLabel>
                <OutlinedInput id="component-outlined" value={multiplyY} onChange={handleInput(setMultiplyY)} label="Y" />
              </FormControl>
            </Prob>

            <Prob
              title="3.  Find first N prime number, and print the result"
              input={nPrime}
              handleInput={handlePrimeN}
              result={nPrimeResult}
            />

            <Prob
              title="4.  Find the first N Fibonacci sequence, and print the result"
              input={nFibonacci}
              handleInput={handleFibonacciN}
              result={nFibonacciResult}
            />
          </Container>
        </Box>
      </Container>
    </>
  )
}

export default App
