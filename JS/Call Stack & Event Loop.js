/**
 * JS is single-threaded. This means it can only do one thing at a time.
 * Luckily, it's able to do things very fast! It manages it's to do list with
 * something called the 'call stack'. Which is a stack data structure where
 * each time something needs to get done (a function is called, etc) this is
 * added to the top of the stack, and when values return, these items are
 * pulled of the top of the stack.
 *
 * This works really well until it doesn't. The issue is when the call stack
 * gets blocked. This happens with synchronous code that takes a long time to
 * complete, for example, loop from 1 to 10 billion.
 *
 * The way we handle this in JS is with async callbacks. What happens here is
 * that the browser (outside the JS runtime v8 instance) keeps track of async
 * stuff, and when it returns, it places it on the task queue. The event loop
 * checks to see if there is anything on the task queue when the call stack
 * empties. If there is something, it pulls it off the queue and adds it to
 * the stack.
 */
 
