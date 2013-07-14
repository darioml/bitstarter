class base {
    package { [ git-core, make, gcc, pkg-config, expect, expect-dev ]: 
        ensure => latest,
        require => Exec["apt-get-update"]
    }
    
    exec { "apt-get-update":
      command => "/usr/bin/sudo apt-get update"
    }
}

include base