import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;


public class EditWatchList {
  public static void editWatchList(WebDriver mydriver){
    //Edit button
    ((FirefoxDriver) mydriver).findElementByXPath("/html/body/div[2]/div/div[2]/div[3]/div/div[1]/div/span/div/div/div[1]/div/div[1]/a").click();
    //
    //WebElement selectAll = ((FirefoxDriver) mydriver).findElementByXPath("//*[@id=\"totalCheck\"]");
    WebDriverWait wait = new WebDriverWait(mydriver, 15);
    WebElement selectAll = wait.until(ExpectedConditions.presenceOfElementLocated(By.id("totalCheck")));
    Actions action = new Actions(mydriver);
    action.moveToElement(selectAll).click().build().perform();

    //System.out.println(selectAll.getAttribute("value"));
    ((FirefoxDriver) mydriver).findElementById("delete_items").click();
    ((FirefoxDriver) mydriver).findElementByXPath("/html/body/div[6]/div[1]/div[2]/div[2]/div[1]/div/form/div/input").click();
  }
}
