import DefaultFooter from "./components/DefaultFooter";
import DefaultNavbar from "./components/DefaultNavbar";
import PopularQuiz from "./components/PopularQuiz";
import Warning from "./components/Warning";

export default function Index(): JSX.Element {
  return (    
      <div>
        <DefaultNavbar
          activePage={"home"}
        />
        <div className="mt-20"></div>        
        <Warning/>        
        <PopularQuiz/>
        <div className="mt-12"></div>
        <DefaultFooter/>
      </div>
  );
}
