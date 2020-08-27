import React from 'react'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'

import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Fab from '@material-ui/core/Fab'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import Zoom from '@material-ui/core/Zoom'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import OutlinedInput from '@material-ui/core/OutlinedInput'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}))

function ScrollTop(props) {
  const { children, window } = props
  const classes = useStyles()
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  })

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor')

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  )
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
}

function App(props) {
  const [sumX, setSumX] = React.useState()
  const [sumY, setSumY] = React.useState()
  const [nPrime, setPrimeN] = React.useState()
  const [nPrimeResult, setPrimeNResult] = React.useState('')

  const [nFibonacci, setFibonacciN] = React.useState()
  const [nFibonacciResult, setFibonacciNResult] = React.useState('')

  const [multiplyX, setMultiplyX] = React.useState()
  const [multiplyY, setMultiplyY] = React.useState()

  const handleSumX = (event) => {
    setSumX(parseInt(event.target.value, 10))
  }
  const handleSumY = (event) => {
    setSumY(parseInt(event.target.value, 10))
  }

  const handleMultiplyX = (event) => {
    setMultiplyX(parseInt(event.target.value, 10))
  }
  const handleMultiplyY = (event) => {
    setMultiplyY(parseInt(event.target.value, 10))
  }

  function primeFactorsTo(max) {
    const store = []
    let i
    let j
    const primes = []
    for (i = 2; i <= max; ++i) {
      if (!store[i]) {
        primes.push(i)
        for (j = i << 1; j <= max; j += i) {
          store[j] = true
        }
      }
    }
    return primes
  }

  function fibonacciFactorsTo(max) {
    let i
    const fib = [] // Initialize array!

    fib[0] = 0
    fib[1] = 1
    for (i = 2; i <= max; i++) {
      // Next fibonacci number = previous + one before previous
      // Translated to JavaScript:
      fib[i] = fib[i - 2] + fib[i - 1]
    }
    return fib
  }

  const handlePrimeN = (event) => {
    const N = parseInt(event.target.value, 10)
    setPrimeN(N)
    setPrimeNResult(primeFactorsTo(N).join(','))
  }

  const handleFibonacciN = (event) => {
    const N = parseInt(event.target.value, 10)
    setFibonacciN(N)
    setFibonacciNResult(fibonacciFactorsTo(N).join(','))
  }

  const sumXY = sumX + sumY
  const multiplyXY = multiplyX * multiplyY
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
            <Paper elevation={3} style={{ padding: 25 }}>
              <Box my={2}>
                <Typography variant="h6" component="h2" gutterBottom>
                  Sum X & Y, and print the result
                </Typography>
                <FormControl variant="outlined">
                  <InputLabel htmlFor="component-outlined">X</InputLabel>
                  <OutlinedInput id="component-outlined" value={sumX} onChange={handleSumX} label="Name" />
                </FormControl>
                <FormControl variant="outlined">
                  <InputLabel htmlFor="component-outlined">Y</InputLabel>
                  <OutlinedInput id="component-outlined" value={sumY} onChange={handleSumY} label="Name" />
                </FormControl>

                <Box>
                  result:
                  {' '}
                  {isNaN(sumXY) ? '' : sumXY}
                </Box>
              </Box>
            </Paper>
            <Paper elevation={3} style={{ padding: 25, marginTop: 25 }}>
              <Box my={2}>
                <Typography variant="h6" component="h2" gutterBottom>
                  Multiply X & Y, and print the result
                </Typography>
                <FormControl variant="outlined">
                  <InputLabel htmlFor="component-outlined">X</InputLabel>
                  <OutlinedInput id="component-outlined" value={multiplyX} onChange={handleMultiplyX} label="Name" />
                </FormControl>
                <FormControl variant="outlined">
                  <InputLabel htmlFor="component-outlined">Y</InputLabel>
                  <OutlinedInput id="component-outlined" value={multiplyY} onChange={handleMultiplyY} label="Name" />
                </FormControl>

                <Box>
                  result:
                  {' '}
                  {isNaN(multiplyXY) ? '' : multiplyXY}
                </Box>
              </Box>
            </Paper>
            <Paper elevation={3} style={{ padding: 25, marginTop: 25 }}>
              <Box my={2}>
                <Typography variant="h6" component="h2" gutterBottom>
                  Find first N prime number, and print the result
                </Typography>
                <FormControl variant="outlined">
                  <InputLabel htmlFor="component-outlined">N</InputLabel>
                  <OutlinedInput id="component-outlined" value={nPrime} onChange={handlePrimeN} label="Name" />
                </FormControl>
                <Box>
                  result:
                  {' '}
                  {nPrimeResult}
                </Box>
              </Box>
            </Paper>
            <Paper elevation={3} style={{ padding: 25, marginTop: 25 }}>
              <Box my={2}>
                <Typography variant="h6" component="h2" gutterBottom>
                  Find the first N Fibonacci sequence, and print the result
                </Typography>
                <FormControl variant="outlined">
                  <InputLabel htmlFor="component-outlined">N</InputLabel>
                  <OutlinedInput id="component-outlined" value={nFibonacci} onChange={handleFibonacciN} label="Name" />
                </FormControl>
                <Box>
                  result:
                  {' '}
                  {nFibonacciResult}
                </Box>
              </Box>
            </Paper>
          </Container>
          <ScrollTop {...props}>
            <Fab color="secondary" size="small" aria-label="scroll back to top">
              <KeyboardArrowUpIcon />
            </Fab>
          </ScrollTop>
        </Box>
      </Container>
    </>
  )
}

export default App
