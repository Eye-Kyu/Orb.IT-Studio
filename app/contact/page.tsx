export default function Contact() {
  return (
    <div>
      <div className="w-screen flex landingly h-screen">
        <div className="w-2/4 space-y-10">
          <p className="text-4xl">Good things happen when you...</p>
          <h2>SAY HELLO!!</h2>
        </div>

        <div className="w-2/4">
          <form className="grid grid-cols-2 gap-10 pt-9">
            <label className="">
              Name* :
              <input
                className="mt-3"
                type="text"
                name="name"
                required
                placeholder="Enter your name here"
              />
            </label>
            <label>
              Email* :
              <input type="email" name="email" required className="mt-3" />
            </label>
            <label>
              Company Name* :
              <input type="text" name="origin" required className="mt-3" />
            </label>
            <label>
              Budget :
              <input type="number" name="budget" className="mt-3" />
            </label>
            <label>
              Where did you hear about us?* :
              <input type="text" name="origin" required className="mt-3" />
            </label>
            <label className="col-span-full">
              Message :
              <textarea
                className="mb-9 mt-3"
                name="message"
                required
                placeholder="Enter your Message here"
              ></textarea>
            </label>
            <button type="submit" value="Submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
