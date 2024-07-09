# Define an array of commit messages (100 unique messages)
$commit_messages = @(
    # "Learned about Angular Components",
    # "Implemented Angular Services",
    # "Explored Angular Directives",
    # "Worked with Angular Forms",
    # "Integrated Angular HTTPClient",
    # "Used Angular Routing",
    # "Tested Angular Applications",
    # "Deployed Angular App",
    # "Angular Performance Optimization",
    # "Used Angular Animations",
    # "Explored Angular Material",
    # "Angular Security Best Practices",
    # "Set up Angular CLI",
    # "Created Angular Modules",
    # "Used Angular Pipes",
    # "Handled Angular Events",
    # "Worked on Angular State Management",
    # "Integrated Angular with REST API",
    # "Optimized Angular Build",
    # "Angular Dependency Injection",
    # "Explored Angular Ivy",
    # "Angular Change Detection",
    # "Lazy Loading in Angular",
    # "Angular Internationalization",
    # "Angular Unit Testing",
    # "Debugging Angular Applications",
    # "Created Angular Custom Directives",
    # "Responsive Design in Angular",
    # "Angular Accessibility",
    # "Angular Performance Profiling",
    # "Worked with Angular Templates",
    # "Angular Lifecycle Hooks",
    # "Created Angular Guards",
    # "Angular Forms Validation",
    # "Angular Reactive Forms",
    # "Explored Angular View Encapsulation",
    # "Angular Change Detection Strategies",
    # "Angular Template Reference Variables",
    # "Angular Service Workers",
    # "Angular PWA Setup",
    # "Angular Universal for SSR",
    # "Angular HMR (Hot Module Replacement)",
    # "Used Angular Libraries",
    # "Configured Angular Environment Variables",
    # "Explored Angular Schematics",
    # "Angular Monorepo with Nx",
    # "Used Angular CDK",
    # "Angular Accessibility Features",
    # "Explored Angular Elements",
    # "Angular Dynamic Components",
    # "Handled Angular Errors",
    # "Angular Custom Pipes",
    # "Angular Template-Driven Forms",
    # "Used Angular Flex Layout",
    # "Explored Angular Animations API",
    # "Angular Dependency Injection Hierarchy",
    # "Optimized Angular Lazy Loading",
    # "Configured Angular CLI Workspaces",
    # "Angular Workspace Schematics",
    # "Explored Angular DevTools",
    # "Angular Forms API",
    # "Angular Template Syntax",
    # "Created Angular Attribute Directives",
    # "Angular Structural Directives",
    # "Angular Custom Validators",
    # "Explored Angular Decorators",
    # "Configured Angular Routing Guards",
    # "Used Angular HTTP Interceptors",
    # "Explored Angular Template Outlets",
    # "Angular Event Binding",
    # "Angular Property Binding",
    # "Angular Two-Way Data Binding",
    # "Angular Content Projection",
    # "Angular NgModules",
    # "Used Angular CLI Builders",
    # "Explored Angular Compiler Options",
    # "Angular Platform Modules",
    # "Created Angular Custom Elements",
    # "Configured Angular Linting",
    # "Angular ESLint Configuration",
    # "Angular TSLint Migration",
    # "Explored Angular Workspace Generators",
    # "Used Angular Storybook",
    # "Angular Component Communication",
    # "Angular Parent-Child Communication",
    # "Angular ViewChild Decorator",
    # "Angular ContentChild Decorator",
    # "Angular Component Lifecycle",
    # "Angular Dependency Injection Tokens",
    # "Angular InjectionToken",
    # "Angular HttpClient Testing",
    # "Angular Protractor E2E Testing",
    # "Angular Jasmine Unit Testing",
    # "Explored Angular TestBed",
    # "Used Angular Mock Services",
    # "Angular Component Factory Resolver",
    # "Angular Renderer2 Service",
    # "Angular Platform Detection",
    # "Explored Angular CDK Drag and Drop",
    # "Angular CDK Overlay",
    # "Angular CDK Portal"

    # "Zones and NgZone so run outside of angular task and comes back result optionally",
    # "means ngZone keep doing task outside of angular asynchronously such as setTimeout",
    # "click, event handler or any other asynchronous operation",
    # "Configurable NgModules so make any module into forRoot module via configuration means",
    # "we can set storeId and storeToken and set a request with header using this injection",
    # "token set in forRoot",
    # "Providers and useExisting so restrict to use other methods from service which is not",
    # "related what we give in abstract class",
    # "Providers and useFactory",
    # "Providers and useClass",
    # "Using InjectionToken so no more same naming conflicting we create an alias/instance of",
    # "InjectionToken API",
    # "Providers and useValue so provide useValue in providers array",
    # "Providers:[{provide:'api', useValue:'http://localhost:3000/pizzas'}]",
    # "inject this in our service with @inject('api') private api:string and then",
    # "use this.api in service call",
    # "initial setup, use hard coded API, Types of providers will start after that",
    # "Guards with canDeactivate so prevent accidentally leaving the form either save",
    # "send or ask permission to leave without saving",
    # "Guards with canActivateChild only parent will work by checking hard coded",
    # "localhost:4200/mail but children will be protected",
    # "Guards with canActivate means isLoggedIn check",
    # "Protecting lazy-loaded modules with canLoad means use guard in auth and check",
    # "if has permission then can load lazy load module otherwise not",
    # "Custom preloading strategies so preload any module on our choice so make a CustomPreload class",
    # "check if data:{preload:true} in any module then preload it",
    # "Preloading lazy-loaded modules like in app.module.ts in RouterModule dot",
    # "forRoot(ROUTES, preloadingStrategy:PreloadAllModules so all module will load",
    # "Lazy-loading modules so add dashboard as lazy loading and mail module as children",
    # "Resolving data for auxiliary outlets with resolver again like mail-folder.resolver.ts",
    # "Destroying auxiliary outlets so become smarter in main app.component.ts routerLink",
    # "pane:null value give so reset the auxiliary outlet",
    # "Auxiliary Navigation API, it is an alternate way",
    # "routerLink through JavaScript API",
    # "here routerLinkActive will not work in JS way for styling",
    # "purpose because it only works with routerLink",
    # "Navigating to auxiliary named outlets so use auxiliary",
    # "outlets to show message detail in 2nd router-outlet",
    # "name='pane' so use routerLink in mail-item.component.ts file",
    # "Learned about Angular Components",
    # "Merge branch 'Advanced-Components'",
    # "Auxiliary named router outlets so more",
    # "than one router-outlet can use with name=pane attribute",
    # "tell in path that attribute name to route in mail.module.ts like outlet:'pane'",
    # "Dynamic route resolves with snapshots means preload data",
    # "resolver use in route path and guard is the alternate of resolver",
    # "Router outlet events means can set the router-outlet events",
    # "Activate and Deactivate events",
    # "Subscribing to router events and whenever the routerLink trigger",
    # "trigger event of navigationEnd every time",
    # "Enabling route tracing see in console all information is there",
    # "route for debugging is perfect and project also setup here",
    # "Async (custom) validators means asynchronous validator use to validate",
    # "store branch exist in database through service API call",
    # "Merge branch 'Advanced-Components'",
    # "URLSearchParams() didn't work so HttpParams() use",
    # "FormGroup (custom) validators so validate whether selected",
    # "product is already exist in cart then disable the button",
    # "NOTE-->formGroup optional",
    # "validator deprecated it will be declare something new way above angular 12",
    # "FormControl (custom) validators so make",
    # "a custom validator file with AbstractControl of branch control",
    # "follow the A123 pattern or not sending",
    # "error of invalidBranch in stock-branch component",
    # "Validators object for FormControls",
    # "so ['',Validator.required] use and in stock-branch component error show",
    # "Merge branch 'Reactive-Forms'",
    # "Adding keyboard events to our control so keyDown blur and focus event implement",
    # "Implementing a ControlValueAccessor so we are going to using the angular behind the scene",
    # "control of ng-pristine ng-untouched ng-valid etc... in custom component",
    # "Custom form control base so reusable component make for stock change but access",
    # "the control like ng-touch etc.. means controlValueAccess will be in next commit",
    # "Updating and resetting FormGroups and FormControls so only reset",
    # "not lose the control like ng-pristine ng-untouched but setValue",
    # "patchValue lose the control means not reset the control",
    # "ng-dirty to ng-pristine etc..",
    # "Subscribing to the valueChanges Observable and calculateTotal",
    # "price of all cart products onValueChanges reactive form",
    # "Http service and joining Observables, make JSON, use forkJoin, make entities by two methods",
    # "reduce and map, and also run JSON server by write npm run db",
    # "FormBuilder API so no need to write new FormControl() again and again",
    # "Merge branch 'Routing'",
    # "Removing items from the FormArray from stock-product component to stock-Inventory container",
    # "Adding items to the FormArray so products adding in the stock FormArray",
    # "FormGroup collections with FormArray parseInt issue",
    # "Binding FormControls to <select>",
    # "Componentizing FormGroups make dumb reusable component",
    # "pass whole FormGroup as a parent from container",
    # "FormControls and FormGroups and use in",
    # "component.ts also import ReactiveFormModule in module.ts",
    # "Reactive Forms setup in smart component and also explain",
    # "smart/containers/stateful and dump/components/stateless component",
    # "Reactive Forms start from here",
    # "Pipes as providers means pipe use in JS and show that in HTML",
    # "after changing for this 1-import it 2-provide",
    # "Merge pull request #3 from usmanaryk1/Dependency-Injection-and-Zones",
    # "Merge branch 'main' into Dependency-Injection-and-Zones",
    # "it in provider 3-inject it in constructor",
    # "4-use in JS and show in HTML",
    # "set default megabyte filter size value even it comes from custom pipe",
    # "MB it replace with megabytes due to specificity",
    # "Creating a custom pipe like Filesize byte into MB",
    # "start custom pipes chapter here default setting",
    # "Creating a custom structural Directive ngFor myFor myForOf",
    # "Using the exportAs property with template refs",
    # "make tooltip here for dynamically use on hover",
    # "Understanding @HostBinding so we can changing style of",
    # "input where credit-card directive declare",
    # "@HostListener and host Object means custom directive input validations and set rules",
    # "Creating a custom attribute Directive using attribute credit-card",
    # "in input and use ElementRef in custom directive to talk to the DOM node",
    # "Merge pull request #2 from usmanaryk1/Directives",
    # "start directives chapter here default setting",
    # "ChangeDetectionStrategy.OnPush and Immutability so not update local state",
    # "entire object change via output to smart component like form component to parent component",
    # "update output-eventEmitter method to change entire object",
    # "ViewEncapsulation and Shadow DOM which is Emulated-by default",
    # "ShadowDom-create-new-Dom and None-global-style",
    # "Using ngTemplateOutlet with context to passing the context implicit and variable value",
    # "Dynamic <ng-template> rendering with ngTemplateOutlet directive inside the ng-container",
    # "Passing context to a dynamic <ng-template>",
    # "Dynamic <ng-template> rendering with ViewContainerRef so its alternate way",
    # "showing ng-template view in dynamic component",
    # "Dynamic components reordering",
    # "Destroying dynamic components",
    # "Dynamic component @Output subscriptions so access output",
    # "dynamically created component with instance",
    # "Dynamic component @Input data",
    # "Merge pull request #1 from usmanaryk1/Customs-Pipes",
    # "Dynamic components with ComponentFactoryResolver",
    # "Using the platform agnostic Renderer migrate renderer into renderer2 angular9",
    # "Using ElementRef and nativeElement so with NativeElements",
    # "some attribute, classes and invoke some native methods",
    # "ViewChild and template #refs",
    # "ViewChildren and QueryLists solve error with setTimeout best is ChangeDetectorRef API's",
    # "ViewChild and ngAfterViewInit also include lifecycle hooks",
    # "ContentChildren QueryList",
    # "ContentChild AfterContentInit",
    # "Merge branch 'main' into Directives",
    # "projecting component",
    # "projection slots",
    # "content projection"

    "content projection",
    "projection slots",
    "projecting component",
    "Merge branch 'main' into Directives",
    "ContentChild AfterContentInit",
    "ContentChildren QueryList",
    "ShadowDom-create-new-Dom and None-global-style",
    "ViewChild and ngAfterViewInit also include lifecycle hooks",
    "ViewChildren and QueryLists solve error with setTimeout best is ChangeDetectorRef API's",
    "ViewChild and template refs",
    "some attribute, classes and invoke some native methods",
    "ContentChild AfterContentInit",
    "Using ElementRef and nativeElement so with NativeElements",
    "Using the platform agnostic Renderer migrate renderer into renderer2 angular9",
    "Dynamic components with ComponentFactoryResolver",
    "Merge pull request 1 from Customs-Pipes",
    "Dynamic component @Input data",
    "Using ElementRef and nativeElement so with NativeElements",
    "Dynamic component @Output subscriptions so access output",
    "Destroying dynamic components",
    "Dynamic components reordering",
    "Dynamic <ng-template> rendering with ViewContainerRef so its alternate way",
    "showing ng-template view in dynamic component",
    "Dynamic component @Output subscriptions so access output",
    "Passing context to a dynamic <ng-template>",
    "Creating a custom structural Directive ngFor myFor myForOf",
    "Dynamic <ng-template> rendering with ngTemplateOutlet directive inside the ng-container",
    "Using ngTemplateOutlet with context to passing the context implicit and variable value",
    "ShadowDom-create-new-Dom and None-global-style",
    "ViewEncapsulation and Shadow DOM which is Emulated-by default",
    "Passing context to a dynamic <ng-template>",
    "update output-eventEmitter method to change entire object",
    "ChangeDetectionStrategy.OnPush and Immutability so not update local state",
    "start directives chapter here default setting",
    "component.ts also import ReactiveFormModule in module.ts",
    "Merge pull request 2 from Directives",
    "send or ask permission to leave without saving",
    "Guards with canDeactivate so prevent accidentally leaving the form either save",
    "Custom preloading strategies so preload any module on our choice so make a CustomPreload class",
    "initial setup, use hard coded API, Types of providers will start after that",
    "use this.api in service call",
    "Guards with canActivateChild only parent will work by checking hard coded",
    "inject this in our service with @inject('api') private api:string and then",
    "Providers:provide:'api', useValue",
    "Providers and useValue so provide useValue in providers array",
    "InjectionToken API",
    "Merge branch 'Routing'",
    "FormBuilder API so no need to write new FormControl() again and again",
    "reduce and map, and also run JSON server by write npm run db",
    "Adding items to the FormArray so products adding in the stock FormArray",
    "update output-eventEmitter method to change entire object",
    "in input and use ElementRef in custom directive to talk to the DOM node",
    "Creating a custom attribute Directive using attribute credit-card",
    "@HostListener and host Object means custom directive input validations and set rules",
    "Understanding @HostBinding so we can changing style of",
    "make tooltip here for dynamically use on hover",
    "Creating a custom attribute Directive using attribute credit-card",
    "Using the exportAs property with template refs",
    "Creating a custom structural Directive ngFor myFor myForOf",
    "start custom pipes chapter here default setting",
    "Creating a custom pipe like Filesize byte into MB",
    "MB it replace with megabytes due to specificity",
    "set default megabyte filter size value even it comes from custom pipe",
    "4-use in JS and show in HTML",
    "Creating a custom pipe like Filesize byte into MB",
    "it in provider 3-inject it in constructor",
    "Merge branch 'main' into Dependency-Injection-and-Zones",
    "Merge pull request 3 from Dependency-Injection-and-Zones",
    "after changing for this 1-import it 2-provide",
    "it in provider 3-inject it in constructor",
    "Pipes as providers means pipe use in JS and show that in HTML",
    "Reactive Forms start from here",
    "Implementing a ControlValueAccessor so we are going to using the angular behind the scene",
    "smart containers stateful and dump components stateless component",
    "Reactive Forms setup in smart component and also explain",
    "component.ts also import ReactiveFormModule in module.ts",
    "FormControls and FormGroups and use in",
    "Pipes as providers means pipe use in JS and show that in HTML",
    "pass whole FormGroup as a parent from container",
    "Componentizing FormGroups make dumb reusable component",
    "Binding FormControls to <select>",
    "FormControls and FormGroups and use in",
    "FormGroup collections with FormArray parseInt issue",
    "Adding items to the FormArray so products adding in the stock FormArray",
    "Removing items from the FormArray from stock-product component to stock-Inventory container",
    "Binding FormControls to <select>",
    "Merge branch 'Routing'",
    "FormBuilder API so no need to write new FormControl() again and again",
    "reduce and map, and also run JSON server by write npm run db",
    "Adding items to the FormArray so products adding in the stock FormArray",
    "Http service and joining Observables, make JSON, use forkJoin, make entities by two methods",
    "price of all cart products onValueChanges reactive form",
    "Subscribing to the valueChanges Observable and calculateTotal",
    "ng-dirty to ng-pristine etc..",
    "patchValue lose the control means not reset the control",
    "not lose the control like ng-pristine ng-untouched but setValue",
    "Http service and joining Observables, make JSON, use forkJoin, make entities by two methods",
    "Updating and resetting FormGroups and FormControls so only reset",
    "the control like ng-touch etc.. means controlValueAccess will be in next commit",
    "Custom form control base so reusable component make for stock change but access",
    "control of ng-pristine ng-untouched ng-valid etc... in custom component",
    "Implementing a ControlValueAccessor so we are going to using the angular behind the scene",
    "Updating and resetting FormGroups and FormControls so only reset",
    "Adding keyboard events to our control so keyDown blur and focus event implement",
    "Dynamic route resolves with snapshots means preload data",
    "Merge branch 'Reactive-Forms'",
    "so ['',Validator.required] use and in stock-branch component error show",
    "Validators object for FormControls",
    "error of invalidBranch in stock-branch component",
    "Adding keyboard events to our control so keyDown blur and focus event implement",
    "follow the A123 pattern or not sending",
    "a custom validator file with AbstractControl of branch control",
    "FormControl (custom) validators so make",
    "validator deprecated it will be declare something new way above angular 12",
    "NOTE-->formGroup optional",
    "follow the A123 pattern or not sending",
    "product is already exist in cart then disable the button",
    "FormGroup (custom) validators so validate whether selected",
    "URLSearchParams() didn't work so HttpParams() use",
    "Merge branch 'Advanced-Components'",
    "store branch exist in database through service API call",
    "product is already exist in cart then disable the button",
    "Async (custom) validators means asynchronous validator use to validate",
    "route for debugging is perfect and project also setup here",
    "Enabling route tracing see in console all information is there",
    "trigger event of navigationEnd every time",
    "Subscribing to router events and whenever the routerLink trigger",
    "Async (custom) validators means asynchronous validator use to validate",
    "Activate and Deactivate events",
    "Router outlet events means can set the router-outlet events",
    "resolver use in route path and guard is the alternate of resolver",
    "Dynamic route resolves with snapshots means preload data",
    "tell in path that attribute name to route in mail.module.ts like outlet:'pane'",
    "than one router-outlet can use with name=pane attribute",
    "Auxiliary named router outlets so more",
    "Activate and Deactivate events",
    "Custom preloading strategies so preload any module on our choice so make a CustomPreload class",
    "Guards with canActivate means isLoggedIn check",
    "Merge branch 'Advanced-Components'",
    "Learned about Angular Components",
    "name='pane' so use routerLink in mail-item.component.ts file",
    "outlets to show message detail in 2nd router-outlet",
    "tell in path that attribute name to route in mail.module.ts like outlet:'pane'",
    "Navigating to auxiliary named outlets so use auxiliary",
    "purpose because it only works with routerLink",
    "here routerLinkActive will not work in JS way for styling",
    "routerLink through JavaScript API",
    "Auxiliary named router outlets so more",
    "Auxiliary Navigation API, it is an alternate way",
    "pane:null value give so reset the auxiliary outlet",
    "Destroying auxiliary outlets so become smarter in main app.component.ts routerLink",
    "Resolving data for auxiliary outlets with resolver again like mail-folder.resolver.ts",
    "Lazy-loading modules so add dashboard as lazy loading and mail module as children",
    "purpose because it only works with routerLink",
    "inject this in our service with @inject('api') private api:string and then",
    "forRoot(ROUTES, preloadingStrategy:PreloadAllModules so all module will load",
    "Preloading lazy-loaded modules like in app.module.ts in RouterModule dot",
    "check if data:{preload:true} in any module then preload it",
    "Custom preloading strategies so preload any module on our choice so make a CustomPreload class",
    "if has permission then can load lazy load module otherwise not",
    "Protecting lazy-loaded modules with canLoad means use guard in auth and check",
    "Guards with canActivate means isLoggedIn check",
    "pane:null value give so reset the auxiliary outlet",
    "localhost:4200/mail but children will be protected",
    "Guards with canActivateChild only parent will work by checking hard coded",
    "send or ask permission to leave without saving",
    "Guards with canDeactivate so prevent accidentally leaving the form either save",
    "Custom preloading strategies so preload any module on our choice so make a CustomPreload class",
    "initial setup, use hard coded API, Types of providers will start after that",
    "use this.api in service call",
    "Guards with canActivateChild only parent will work by checking hard coded",
    "inject this in our service with @inject('api') private api:string and then",
    "Providers",
    "Providers and useValue so provide useValue in providers array",
    "InjectionToken API",
    "Merge branch 'Routing'",
    "FormBuilder API so no need to write new FormControl() again and again",
    "reduce and map, and also run JSON server by write npm run db",
    "Adding items to the FormArray so products adding in the stock FormArray",
    "Http service and joining Observables, make JSON, use forkJoin, make entities by two methods",
    "price of all cart products onValueChanges reactive form",
    "Subscribing to the valueChanges Observable and calculateTotal",
    "ng-dirty to ng-pristine etc..",
    "patchValue lose the control means not reset the control",
    "not lose the control like ng-pristine ng-untouched but setValue",
    "Http service and joining Observables, make JSON, use forkJoin, make entities by two methods",
    "Updating and resetting FormGroups and FormControls so only reset",
    "the control like ng-touch etc.. means controlValueAccess will be in next commit",
    "Custom form control base so reusable component make for stock change but access",
    "control of ng-pristine ng-untouched ng-valid etc... in custom component",
    "Implementing a ControlValueAccessor so we are going to using the angular behind the scene",
    "Updating and resetting FormGroups and FormControls so only reset",
    "Adding keyboard events to our control so keyDown blur and focus event implement",
    "Dynamic route resolves with snapshots means preload data",
    "Using InjectionToken so no more same naming conflicting we create an alias/instance of",
    "Protecting lazy-loaded modules with canLoad means use guard in auth and check",
    "Providers and useClass",
    "Providers and useFactory",
    "related what we give in abstract class",
    "Providers and useExisting so restrict to use other methods from service which is not",
    "token set in forRoot",
    "we can set storeId and storeToken and set a request with header using this injection",
    "inject this in our service with @inject('api') private api:string and then",
    "Configurable NgModules so make any module into forRoot module via configuration means",
    "click, event handler or any other asynchronous operation",
    "Providers and useFactory",
    "means ngZone keep doing task outside of angular asynchronously such as setTimeout",
    "Zones and NgZone so run outside of angular task and comes back result optionally"
    )
    
# Start date
$start_date = [datetime]::ParseExact("2022-03-11", "yyyy-MM-dd", $null)
# End date
$end_date = [datetime]::ParseExact("2022-12-31", "yyyy-MM-dd", $null)

# Function to increment date
function Increment-Date($date) {
    $date.AddDays(1)
}

# Function to sanitize file names
function Sanitize-FileName($name) {
    return $name -replace '[\/:*?"<>|#]', '-'
}

# Current date variable
$current_date = $start_date

# Counter for commit messages
$message_index = 0

# Loop through dates and create commits
while ($current_date -le $end_date) {
    if ($current_date.DayOfWeek -ne [System.DayOfWeek]::Saturday -and $current_date.DayOfWeek -ne [System.DayOfWeek]::Sunday) {
    $date_with_time = $current_date.ToString("yyyy-MM-ddTHH:mm:ss")
    $message = $commit_messages[$message_index % $commit_messages.Count]
    
    # Set the date for the commit
    $env:GIT_AUTHOR_DATE = $date_with_time
    $env:GIT_COMMITTER_DATE = $date_with_time

    # Create a new file or make changes to an existing file
    $file_name = Sanitize-FileName("$($message.Replace(' ', '-')).txt")
    "$message" | Out-File -FilePath $file_name

    # Stage the changes
    git add $file_name

    # Commit the changes with the backdated timestamp
    git commit -m "$message"

    # Push the commit immediately
    #git push origin master
    git push origin main

    # Increment the message index
    $message_index++
    
    }

    # Increment the date
    $current_date = Increment-Date $current_date

}

# Unset the environment variables
Remove-Item Env:GIT_AUTHOR_DATE
Remove-Item Env:GIT_COMMITTER_DATE




# # Define an array of commit messages (45 unique messages)
# $commit_messages = @(
#     "Learned about Angular Components",
#     "Implemented Angular Services",
#     "Integrated Angular HTTPClient",
#     "Explored Angular Directives",
#     "Worked with Angular Forms",
#     "Used Angular Routing",
#     "Angular Performance Optimization",
#     "Tested Angular Applications",
#     "Deployed Angular App",
#     "Used Angular Animations",
#     "Set up Angular CLI",
#     "Explored Angular Material",
#     "Angular Security Best Practices",
#     "Created Angular Modules",
#     "Worked on Angular State Management",
#     "Used Angular Pipes",
#     "Handled Angular Events",
#     "Integrated Angular with REST API",
#     "Explored Angular Ivy",
#     "Optimized Angular Build",
#     "Angular Dependency Injection",
#     "Angular Change Detection",
#     "Angular Unit Testing",
#     "Lazy Loading in Angular",
#     "Angular Internationalization",
#     "Debugging Angular Applications",
#     "Angular Lifecycle Hooks",
#     "Created Angular Custom Directives",
#     "Responsive Design in Angular",
#     "Angular Accessibility",
#     "Angular Performance Profiling",
#     "Worked with Angular Templates",
#     "Created Angular Guards",
#     "Angular Template Reference Variables",
#     "Angular Service Workers",
#     "Angular Reactive Forms",
#     "Explored Angular View Encapsulation",
#     "Angular PWA Setup",
#     "Angular Change Detection Strategies",
#     "Angular Universal for SSR",
#     "Used Angular CDK",
#     "Angular HMR (Hot Module Replacement)",
#     "Configured Angular Environment Variables",
#     "Used Angular Libraries",
#     "Angular Monorepo with Nx",
#     "Explored Angular Schematics",
#     "Angular Forms Validation"
# )

# # Start date
# $start_date = [datetime]::ParseExact("2022-03-11", "yyyy-MM-dd", $null)
# # End date
# $end_date = [datetime]::ParseExact("2022-07-30", "yyyy-MM-dd", $null)

# # Function to generate a random date between start and end date
# function Get-RandomDate($startDate, $endDate) {
#     $range = ($endDate - $startDate).Days
#     return $startDate.AddDays((Get-Random -Maximum $range))
# }

# # Generate 45 unique random dates
# $random_dates = @()
# while ($random_dates.Count -lt 45) {
#     $random_date = Get-RandomDate $start_date $end_date
#     if (-not $random_dates.Contains($random_date)) {
#         $random_dates += $random_date
#     }
# }

# # Sort the random dates
# $random_dates = $random_dates | Sort-Object

# # Loop through random dates and create commits
# for ($i = 0; $i -lt $random_dates.Count; $i++) {
#     $current_date = $random_dates[$i]
#     $date_with_time = $current_date.ToString("yyyy-MM-ddTHH:mm:ss")
#     $message = $commit_messages[$i % $commit_messages.Count]
    
#     # Set the date for the commit
#     $env:GIT_AUTHOR_DATE = $date_with_time
#     $env:GIT_COMMITTER_DATE = $date_with_time

#     # Create a new file or make changes to an existing file
#     $file_name = "$($message.Replace(' ', '-')).txt"
#     Add-Content -Path $file_name -Value "$message"

#     # Stage the changes
#     git add $file_name

#     # Commit the changes with the backdated timestamp
#     git commit -m "$message"

#     # Push the commit immediately
#     # git push origin master
#     git push origin main
# }

# # Unset the environment variables
# Remove-Item Env:GIT_AUTHOR_DATE
# Remove-Item Env:GIT_COMMITTER_DATE


# for run this script paste this in powershell terminal => powershell -ExecutionPolicy Bypass -File create-backdated-commits.ps1













