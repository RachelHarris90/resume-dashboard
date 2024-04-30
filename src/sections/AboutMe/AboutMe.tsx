import { Card } from "../../commonComponents/Card";

export const AboutMe = () => {
  return (
    <Card>
      <section>
        <h2 className="text-2xl">About me</h2>
        <div className="py-4">
          <p>Hi! Welcome to my resume. Let me tell you a bit about myself.</p>
          <br />
          <p>
            I've been working in software teams for many years in various roles
            from Software Engineer to Product Manager. I love working with users
            and specialists to create great software that makes peoples lives
            easier and better, particularly their work lives and much of the
            work I've done is in the business-to-business software-as-a-service
            space.
          </p>
          <br />
          <p>
            After over a decade working as a Business Analyst,
            Delivery/Development Lead and Product Manager, I completed a coding
            bootcamp and transitioned into a role as a software developer at
            Culture Amp.
          </p>
          <br />
          <p>
            Now I spend my days writing code and tests, designing technical
            solutions, discussing designs and requirements, pairing with other
            engineers. I'm also studying a computer science degree on the side.
          </p>
        </div>
      </section>
    </Card>
  );
};
