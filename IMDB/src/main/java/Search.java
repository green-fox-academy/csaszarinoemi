import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class Search {
    public static void search (WebDriver mydriver, String input){
      WebDriverWait wait = new WebDriverWait(mydriver, 30);
      WebElement search = wait.until(ExpectedConditions.presenceOfElementLocated(By.id("navbar-query")));
      search.click();
      search.sendKeys(input, Keys.ENTER);

    }
}
