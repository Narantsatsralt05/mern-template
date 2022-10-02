import Link from "next/link";

import { Background } from "../components/background/Background";
import { Button } from "../components/button/Button";
import { HeroOneButton } from "../components/hero/HeroOneButton";
import { Section } from "../layout/Section";
import { NavbarTwoColumns } from "../components/navigation/NavbarTwoColumns";
import { Logo } from "./Logo";
import { sendGetRequest, getErrorMessage, Todo } from "@utils";

const Hero = () => {
  const hitBackend = async () => {
    sendGetRequest<Todo>("https://jsonplaceholder.typicode.com/todos/1")
      .then(console.log)
      .catch((error) => alert(getErrorMessage(error, hitBackend.name)));
  };
  return (
    <Background color="bg-gray-100">
      <Section yPadding="py-6">
        <NavbarTwoColumns logo={<Logo xl />}>
          <li>
            <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
              <a>GitHub</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Sign in</a>
            </Link>
          </li>
        </NavbarTwoColumns>
      </Section>

      <Section yPadding="pt-20 pb-32">
        <button onClick={hitBackend}>Send request</button>
        <HeroOneButton
          title={
            <>
              {"The modern landing page for\n"}
              <span className="text-primary-500">React developers</span>
            </>
          }
          description="The easiest way to build a React landing page in seconds."
          button={
            <Link href="https://creativedesignsguru.com/category/nextjs/">
              <a>
                <Button xl>Download Your Free Theme</Button>
              </a>
            </Link>
          }
        />
      </Section>
    </Background>
  );
};

export { Hero };
