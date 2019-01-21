import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;


public class WathListOrder {
  public static void watchListOrder(WebDriver mydriver, String optionNumber){
    WebDriverWait wait = new WebDriverWait(mydriver, 30);
    ((FirefoxDriver) mydriver).findElementByXPath("/html/body/div[2]/div/div[1]/div[2]/div[1]/ul/li[8]/p/a").click();
    ((FirefoxDriver) mydriver).findElementByXPath("/html/body/div[2]/div/div[2]/div[3]/div/div[1]/div/span/div/div/div[2]/div[1]/div[1]/div[1]/select").click();
    WebElement order = wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("/html/body/div[2]/div/div[2]/div[3]/div/div[1]/div/span/div/div/div[2]/div[1]/div[1]/div[1]/select/option[" + optionNumber + "]")));
    order.click();
  }
}
