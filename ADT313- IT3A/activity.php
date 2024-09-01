<?php
    $studentID=0;

    $table = array(
        "header"=>array(
            "studentId",
            "FirstName",
            "Middlename",
            "lastname",
            "section",
            "course",
            "yearlevel"
        ),
        "body"=>[
           
            array(
               
            "FirstName"=>"Carl Regiemon",
            "Middlename"=>"Arellano",
            "lastname"=>"Marcelo",
            "section"=>"BSIT-3A",
            "course"=>"IT",
            "yearlevel"=>"3rd Year"
            ),
            array(
                "FirstName"=>"Cristan",
                "Middlename"=>"Pardilla",
                "lastname"=>"Legazpi",
                "section"=>"BSIT-3A",
                "course"=>"IT",
                "yearlevel"=>"3rd Year"
            ),
            array(
            "FirstName"=>"trishia",
            "Middlename"=>"landicho",
            "lastname"=>"manabat",
            "section"=>"BSIT-3A",
            "course"=>"IT",
            "yearlevel"=>"3rd Year"
            ),
            array(
                "FirstName"=>"andrei",
                "Middlename"=>"lumkso",
                "lastname"=>"martin",
                "section"=>"BSIT-3A",
                "course"=>"IT",
                "yearlevel"=>"3rd Year"
            ),
            array(
            "FirstName"=>"john oswald",
            "Middlename"=>"kareate",
            "lastname"=>"yap",
            "section"=>"BSIT-3A",
            "course"=>"IT",
            "yearlevel"=>"3rd Year"
            ),
            array(
                "FirstName"=>"jeorge anthony",
                "Middlename"=>"dela pena",
                "lastname"=>"reyes",
                "section"=>"BSIT-3A",
                "course"=>"IT",
                "yearlevel"=>"3rd Year"
                ),
            array(
            "FirstName"=>"cathleen",
            "Middlename"=>"yemen",
            "lastname"=>"bartolome",
            "section"=>"BSIT-3A",
            "course"=>"IT",
            "yearlevel"=>"3rd Year"
            ),
            array(
                "FirstName"=>"ian",
                "Middlename"=>"dela cruz",
                "lastname"=>"llabore",
                "section"=>"BSIT-3A",
                "course"=>"course",
                "yearlevel"=>"yearlevel"
            ),
            array(
                "FirstName"=>"mark james",
                "Middlename"=>"bidasbu",
                "lastname"=>"rogelio",
                "section"=>"BSIT-3A",
                "course"=>"IT",
                "yearlevel"=>"3rd Year"
                ),    
            array(
            "FirstName"=>"sebastian",
            "Middlename"=>"cruz",
            "lastname"=>"sonny",
            "section"=>"section",
            "course"=>"course",
            "yearlevel"=>"yearlevel"
            )
    
        ]
    );
    $studentID = 0;
    


    echo "<table border ='5'>";
    echo "<tr>";

    foreach ($table["header"] as $header){
        echo "<th>$header</th>";
    }
    echo "</tr>";
   
    foreach ($table["body"] as $row){
        echo "<tr>";
         echo "<td>".($studentID + 1)."</td>";
            $studentID++;
        foreach ($table["header"] as $header){
            if ($header !== "studentId"){
            $x = str_replace(' ', '', $header);
            echo "<td>{$row[$x]}</td>";
            }
        }
        
        echo "</tr>";

    }
 
  
    ?>