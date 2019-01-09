/** 
WEB PERFORMANCE IN JS 

From an operational perspective, one of the most important things
you can do to ensure the development and maintainance of a performant
page is to set specific, measurable goals around performance. Things like SLAs
for page load times, first render times, etc. This takes some thought - questions
like what is the most comment runtime environment our users will be using - mobile,
desktop, are they in areas with consistent internet access? Put in place analytics 
to measure this.

Once you've agreed as a team on a set of targets, be aware of the techniques to help
keep your application fast:
  - code splitting during a build process - split up your code into chunks based on 
    when it will be needed. keep the initial bundle as small as possible
  - tree shaking - use a build tool to analyze which parts of your codebase 
    are not needed. especially with modern JS frameworks, lots of code can be
    cut out entirely from the production build.
  - CSS can cause slowdowns, be aware that certain styles/animations are taxing on the device.
  - keep in mind principles of cross-browser compatability - progressive enhancement
    will help keep features that don't work on some devices from slowing down load times there.
*/
