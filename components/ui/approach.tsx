const Approaches = [
  {
    Method: "CLOUD TO GROUND APPROACH",
    Description:
      "At Studio Mizan, we view problems as untapped opportunities that can be exploited to create innovative solutions. This means dividing our attention to focus onthe bigger picture and identifying the most relevant opportunities while at the same time, analyzing the smaller details that often go unnoticed",
  },
  {
    Method: "STRUCTURED PROBLEM SOLVING",
    Description:
      "Structured problem-solving is a systematic approach to problem-solving that involves breaking down complex problems into smaller, manageable steps. This approach has been widely used in various fields, such as engineering, business, and education.",
  },
  {
    Method: "VISIONING",
    Description:
      "Strike the right balance between your Business's ambition and achievability. We work with you to develop tailor-made solutions that will help you break the glass ceiling and achieve your vision, ensuring that your company is on the right track to success.",
  },
];

export default function Approach() {
  return (
    <div>
      <div className="Approach-container w-full px-4 lg:px-0">
        {Approaches.map((item, index) => (
          <div
            key={index}
            className="Approach-item lg:flex-row flex-col flex lg:mx-28 my-8 gap-4 lg:gap-0"
          >
            <div className="Approach-item-title lg:w-1/4 w-full para lg:text-lg font-semibold">
              {item.Method}
            </div>
            <div className="Approach-item-description lg:w-3/4 w-full text-gray-900 lg:text-base">
              <p>{item.Description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
