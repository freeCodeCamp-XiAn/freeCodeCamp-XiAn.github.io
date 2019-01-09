const {exec} = require('child_process')
const {watch, task, series} = require('gulp')
let workerProcess;


watch(['./src/**']).on('change', () => {
  console.info('file(s) changed, re-run test......')
  runTest()
})

task('default', runTest)

function runTest() {
  if(workerProcess) {
    workerProcess.kill()
  }
  workerProcess = exec('jest', (err, stdout, stderr) => {
    if (err) {
      console.error(err)
    }
    console.log(stdout)
    console.log(stderr)
  })
}