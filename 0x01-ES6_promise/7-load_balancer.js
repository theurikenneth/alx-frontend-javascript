/* Write and export a function loadBalancer
   It accepts two arguments: chinaDownload(Promise)
   and USDownload(Promise) */
export default function loadBalancer(chinaDownload, USDownload) {
  /* uses .race()returns a Promise that is settled the same way
     (and takes the same value) as the first promise that settles
     amongst the promises of the iterable passed as an argument */
  return Promise.race([chinaDownload, USDownload]);
}
