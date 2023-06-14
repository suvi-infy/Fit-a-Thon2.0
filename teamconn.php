<?php

$conn=mysqli_connect("localhost","root","","myconnection1");

if(isset($_POST['submit'])){


    for($i=0; $i<count($_POST['ename']); $i++){

        

        $sql="insert into teaminfo(ename,eid)values('" .$_POST['ename'][$i]."','".$_POST['eid'][$i]."')";

        $run=mysqli_query($conn,$sql);
        if($run)
        {
            
           echo "<script type='text/javascript'>alert('Register successfully')</script> ";
            

        }
    }
}
?>